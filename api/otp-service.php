<?php
// Enable error reporting for debugging
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Create a log file for debugging
function logError($message) {
    $logFile = __DIR__ . '/otp_error.log';
    $timestamp = date('Y-m-d H:i:s');
    file_put_contents($logFile, "[$timestamp] $message" . PHP_EOL, FILE_APPEND);
}

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// MessageCentral API credentials
$customerId = 'C-CBD632A772D849A';
$authToken = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJDLUNCRDYzMkE3NzJEODQ5QSIsImlhdCI6MTc0Mjk5OTY2NSwiZXhwIjoxOTAwNjc5NjY1fQ.xtzep9AC3F7ATN5fYJk1rplzE2yLioF3pA1wLg2I_dpmpTDmn2iZ_69hEUvTzNEPw6sC2io0ZtBAk2GKZVqAaA';

// Log request data
$requestData = file_get_contents('php://input');
logError("Received request: " . $requestData);

// Function to send OTP via MessageCentral
function sendOTP($phoneNumber) {
    global $customerId, $authToken;
    
    logError("Attempting to send OTP to: $phoneNumber");
    
    // Ensure phone number is 10 digits (without country code)
    $phoneNumber = preg_replace('/[^0-9]/', '', $phoneNumber);
    if (strlen($phoneNumber) !== 10) {
        logError("Invalid phone number format: $phoneNumber");
        return [
            'success' => false,
            'message' => 'Invalid phone number format. Please provide a 10-digit number.'
        ];
    }
    
    // MessageCentral API endpoint for sending OTP
    $apiUrl = "https://api.messagecentral.in/verification/v3/send";
    
    logError("Preparing MessageCentral API call for phone: $phoneNumber");
    
    // Request data
    $data = [
        'customerId' => $customerId,
        'countryCode' => '91',
        'mobileNumber' => $phoneNumber,
        'flowType' => 'SMS'
    ];
    
    logError("Calling MessageCentral API with data: " . json_encode($data));
    
    // Initialize cURL session
    $ch = curl_init($apiUrl);
    
    // Set cURL options
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
    curl_setopt($ch, CURLOPT_HTTPHEADER, [
        'Content-Type: application/json',
        'Authorization: Bearer ' . $authToken
    ]);
    
    // For debugging, don't verify SSL certificates
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
    curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, false);
    
    // Execute cURL request
    $response = curl_exec($ch);
    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    
    // Check for cURL errors
    if (curl_errno($ch)) {
        $curlError = curl_error($ch);
        logError("cURL Error: $curlError");
        curl_close($ch);
        
        // Generate a fallback OTP for testing
        $fallbackOtp = str_pad(rand(0, 999999), 6, '0', STR_PAD_LEFT);
        $referenceId = md5($phoneNumber . time());
        
        // Store the OTP for verification
        $storageDir = __DIR__ . '/otp_storage';
        if (!file_exists($storageDir)) {
            mkdir($storageDir, 0755, true);
        }
        
        $filename = $storageDir . '/' . md5($phoneNumber) . '.json';
        $data = [
            'phone' => $phoneNumber,
            'otp' => $fallbackOtp,
            'created' => time(),
            'expires' => time() + (5 * 60) // 5 minutes expiry
        ];
        
        file_put_contents($filename, json_encode($data));
        
        logError("API call failed. Using fallback OTP: $fallbackOtp with reference ID: $referenceId");
        
        return [
            'success' => true,
            'message' => 'OTP sent successfully (fallback mode)',
            'reference_id' => $referenceId,
            'otp' => $fallbackOtp // REMOVE THIS IN PRODUCTION
        ];
    }
    
    curl_close($ch);
    
    // Log response
    logError("API Response (HTTP $httpCode): $response");
    
    // Parse response
    $responseData = json_decode($response, true);
    
    // Check if OTP was sent successfully
    if ($httpCode == 200 && isset($responseData['status']) && $responseData['status'] === 'success') {
        logError("OTP sent successfully");
        return [
            'success' => true,
            'message' => 'OTP sent successfully',
            'reference_id' => $responseData['referenceId'] ?? null
        ];
    } else {
        logError("Failed to send OTP: " . json_encode($responseData));
        
        // Generate a fallback OTP for testing
        $fallbackOtp = str_pad(rand(0, 999999), 6, '0', STR_PAD_LEFT);
        $referenceId = md5($phoneNumber . time());
        
        // Store the OTP for verification
        $storageDir = __DIR__ . '/otp_storage';
        if (!file_exists($storageDir)) {
            mkdir($storageDir, 0755, true);
        }
        
        $filename = $storageDir . '/' . md5($phoneNumber) . '.json';
        $data = [
            'phone' => $phoneNumber,
            'otp' => $fallbackOtp,
            'created' => time(),
            'expires' => time() + (5 * 60) // 5 minutes expiry
        ];
        
        file_put_contents($filename, json_encode($data));
        
        logError("API call failed. Using fallback OTP: $fallbackOtp with reference ID: $referenceId");
        
        return [
            'success' => true,
            'message' => 'OTP sent successfully (fallback mode)',
            'reference_id' => $referenceId,
            'otp' => $fallbackOtp // REMOVE THIS IN PRODUCTION
        ];
    }
}

// Function to verify OTP
function verifyOTP($phoneNumber, $otp, $referenceId) {
    global $customerId, $authToken;
    
    logError("Attempting to verify OTP for: $phoneNumber, OTP: $otp, Ref: $referenceId");
    
    // Ensure phone number is 10 digits (without country code)
    $phoneNumber = preg_replace('/[^0-9]/', '', $phoneNumber);
    
    // Check if we should use the fallback verification
    $storageDir = __DIR__ . '/otp_storage';
    $filename = $storageDir . '/' . md5($phoneNumber) . '.json';
    
    if (file_exists($filename)) {
        $storedData = json_decode(file_get_contents($filename), true);
        
        // Check if OTP has expired
        if ($storedData['expires'] < time()) {
            unlink($filename); // Delete expired OTP
            logError("OTP expired for phone: $phoneNumber");
            return [
                'success' => false,
                'message' => 'OTP expired. Please request a new OTP.'
            ];
        }
        
        // Check if entered OTP matches stored OTP
        if ($otp === $storedData['otp']) {
            logError("OTP verified successfully using fallback for phone: $phoneNumber");
            
            // Delete the OTP file after successful verification
            unlink($filename);
            
            return [
                'success' => true,
                'message' => 'OTP verified successfully'
            ];
        } else {
            logError("OTP verification failed using fallback for phone: $phoneNumber");
            return [
                'success' => false,
                'message' => 'Invalid OTP. Please try again.'
            ];
        }
    }
    
    // MessageCentral API endpoint for verifying OTP
    $apiUrl = "https://api.messagecentral.in/verification/v3/verify";
    
    // Request data
    $data = [
        'customerId' => $customerId,
        'countryCode' => '91',
        'mobileNumber' => $phoneNumber,
        'otpCode' => $otp,
        'referenceId' => $referenceId
    ];
    
    logError("Calling MessageCentral verify API with data: " . json_encode($data));
    
    // Initialize cURL session
    $ch = curl_init($apiUrl);
    
    // Set cURL options
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
    curl_setopt($ch, CURLOPT_HTTPHEADER, [
        'Content-Type: application/json',
        'Authorization: Bearer ' . $authToken
    ]);
    
    // For debugging, don't verify SSL certificates
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
    curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, false);
    
    // Execute cURL request
    $response = curl_exec($ch);
    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    
    // Check for cURL errors
    if (curl_errno($ch)) {
        $curlError = curl_error($ch);
        logError("cURL Error during verification: $curlError");
        curl_close($ch);
        return [
            'success' => false,
            'message' => 'Failed to connect to OTP verification service: ' . $curlError
        ];
    }
    
    curl_close($ch);
    
    // Log response
    logError("Verify API Response (HTTP $httpCode): $response");
    
    // Parse response
    $responseData = json_decode($response, true);
    
    // Check if OTP verification was successful
    if ($httpCode == 200 && isset($responseData['status']) && $responseData['status'] === 'success') {
        logError("OTP verified successfully");
        return [
            'success' => true,
            'message' => 'OTP verified successfully'
        ];
    } else {
        logError("OTP verification failed: " . json_encode($responseData));
        return [
            'success' => false,
            'message' => 'OTP verification failed: ' . ($responseData['message'] ?? 'Invalid OTP')
        ];
    }
}

// Handle API requests
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $requestData = json_decode(file_get_contents('php://input'), true);
    $action = $requestData['action'] ?? '';
    
    logError("Processing action: $action");
    
    if ($action === 'send_otp') {
        // Send OTP
        $phoneNumber = $requestData['phone'] ?? '';
        $result = sendOTP($phoneNumber);
        echo json_encode($result);
    } 
    elseif ($action === 'verify_otp') {
        // Verify OTP
        $phoneNumber = $requestData['phone'] ?? '';
        $otp = $requestData['otp'] ?? '';
        $referenceId = $requestData['reference_id'] ?? '';
        $result = verifyOTP($phoneNumber, $otp, $referenceId);
        echo json_encode($result);
    }
    else {
        // Invalid action
        logError("Invalid action specified: $action");
        echo json_encode([
            'success' => false,
            'message' => 'Invalid action specified'
        ]);
    }
} else {
    // Method not allowed
    logError("Method not allowed: " . $_SERVER['REQUEST_METHOD']);
    http_response_code(405);
    echo json_encode([
        'success' => false,
        'message' => 'Method not allowed'
    ]);
}
?>
