import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Send, Check, RefreshCw } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useToast } from '@/components/ui/use-toast';
import { useLocation } from 'react-router-dom';
import { Alert, AlertDescription } from "@/components/ui/alert";

const Enquiry = () => {
  const { toast } = useToast();
  const location = useLocation();
  
  const [formData, setFormData] = useState({
    enquiryType: "",
    name: "",
    email: "",
    phone: "",
    fullAddress: "",
    message: ""
  });
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Phone verification states
  const [isPhoneVerified, setIsPhoneVerified] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [userEnteredOtp, setUserEnteredOtp] = useState("");
  const [otpError, setOtpError] = useState("");
  const [resendDisabled, setResendDisabled] = useState(false);
  const [resendCounter, setResendCounter] = useState(30);
  const [sendingOtp, setSendingOtp] = useState(false);
  const [verifyingOtp, setVerifyingOtp] = useState(false);
  const [referenceId, setReferenceId] = useState(""); // Store MessageCentral reference ID

  // Handle query parameters for prefilling the form
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const enquiryType = params.get('type');
    const position = params.get('position');
    
    if (enquiryType) {
      setFormData(prev => ({...prev, enquiryType}));
    }
    
    if (position) {
      setFormData(prev => ({
        ...prev, 
        message: `I would like to apply for the position of ${position}. \n\nMy qualifications: \n\nMy experience: \n\nWhy I want to join: `
      }));
    }
  }, [location]);

  // Countdown timer for OTP resend
  useEffect(() => {
    let interval: number | null = null;
    
    if (resendDisabled && resendCounter > 0) {
      interval = window.setInterval(() => {
        setResendCounter((prev) => {
          if (prev <= 1) {
            setResendDisabled(false);
            if (interval) clearInterval(interval);
            return 30;
          }
          return prev - 1;
        });
      }, 1000);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [resendDisabled, resendCounter]);

  // Validate phone number format (India)
  const isValidIndianPhoneNumber = (phone: string) => {
    const phoneRegex = /^[6-9]\d{9}$/;
    return phoneRegex.test(phone);
  };

  // Send OTP to user's phone using MessageCentral API
  const sendOTP = async () => {
    // Validate phone number
    if (!formData.phone || formData.phone.length !== 10) {
      setOtpError('Please enter a valid 10-digit phone number');
      return;
    }
    
    setSendingOtp(true);
    setOtpError('');
    
    try {
      console.log('Sending OTP to:', formData.phone);
      
      // Call our PHP backend to send OTP
      const response = await fetch('./api/otp-service.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          action: 'send_otp',
          phone: formData.phone
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }

      const data = await response.json();
      console.log('OTP response:', data);
      
      if (data.success) {
        setOtpSent(true);
        setReferenceId(data.reference_id);
        setResendDisabled(true);
        
        // For development/testing, store the OTP in localStorage if provided
        if (data.otp) {
          localStorage.setItem('testOTP', data.otp);
          console.log('Test OTP:', data.otp);
        }
        
        setOtpError('');
        toast({
          title: "OTP Sent Successfully",
          description: `We've sent a verification code to +91 ${formData.phone}. Please check your messages.`,
          duration: 5000,
        });
      } else {
        setOtpError(data.message || 'Failed to send OTP. Please try again.');
        toast({
          title: "OTP Sending Failed",
          description: data.message || "Failed to send verification code. Please try again.",
          variant: "destructive",
          duration: 3000,
        });
      }
    } catch (error) {
      console.error('Error sending OTP:', error);
      setOtpError('Connection error. Please try again later.');
      toast({
        title: "Connection Error",
        description: "Failed to connect to the OTP service. Please try again later.",
        variant: "destructive",
        duration: 3000,
      });
    } finally {
      setSendingOtp(false);
    }
  };

  // Verify OTP entered by user using MessageCentral API
  const verifyOTP = async () => {
    if (!userEnteredOtp || userEnteredOtp.length !== 6) {
      setOtpError('Please enter a valid 6-digit OTP');
      return;
    }

    setVerifyingOtp(true);
    setOtpError('');

    try {
      console.log('Verifying OTP:', userEnteredOtp, 'for phone:', formData.phone);
      
      // Call our PHP backend to verify OTP
      const response = await fetch('./api/otp-service.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          action: 'verify_otp',
          phone: formData.phone,
          otp: userEnteredOtp,
          reference_id: referenceId
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }

      const data = await response.json();
      console.log('Verification response:', data);
      
      if (data.success) {
        setIsPhoneVerified(true);
        setOtpSent(false);
        setOtpError('');
        toast({
          title: "Phone Verified",
          description: "Your phone number has been successfully verified!",
          duration: 3000,
        });
      } else {
        setOtpError(data.message || 'Invalid OTP. Please try again.');
        toast({
          title: "Verification Failed",
          description: data.message || "The OTP you entered is incorrect. Please check and try again.",
          variant: "destructive",
          duration: 3000,
        });
      }
    } catch (error) {
      console.error('Error verifying OTP:', error);
      setOtpError('Connection error. Please try again later.');
      toast({
        title: "Connection Error",
        description: "Failed to connect to the verification service. Please try again later.",
        variant: "destructive",
        duration: 3000,
      });
    } finally {
      setVerifyingOtp(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    // Check if phone is verified
    if (!isPhoneVerified) {
      toast({
        title: "Phone Verification Required",
        description: "Please verify your phone number before submitting the form",
        variant: "destructive",
        duration: 3000,
      });
      return;
    }
    
    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch("https://formcarry.com/s/jpFEOVCmLiA", {
        method: 'POST',
        headers: { 
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (data.code === 200) {
        toast({
          title: "Enquiry Submitted",
          description: "Thank you for contacting us, we will get back to you as soon as possible.",
          duration: 3000,
        });
        // Reset form
        setFormData({
          enquiryType: "",
          name: "",
          email: "",
          phone: "",
          fullAddress: "",
          message: ""
        });
        // Reset phone verification state
        setIsPhoneVerified(false);
        setOtpSent(false);
        setUserEnteredOtp("");
        setReferenceId("");
      } else {
        setError(data.message || "Something went wrong. Please try again.");
        toast({
          title: "Submission Failed",
          description: data.message || "Something went wrong. Please try again.",
          duration: 3000,
          variant: "destructive"
        });
      }
    } catch (error: any) {
      setError(error.message || "Failed to submit form. Please try again.");
      toast({
        title: "Submission Failed",
        description: error.message || "Failed to submit form. Please try again.",
        duration: 3000,
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <Navigation />
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-[#0EA5E9] mb-12">
            {formData.enquiryType?.includes('job') || formData.enquiryType?.includes('career') 
              ? 'Apply for Position' 
              : formData.enquiryType === 'visit' 
                ? 'Schedule a Visit' 
                : 'Send us a Message'}
          </h1>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left Section - Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                {error && (
                  <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm">
                    {error}
                  </div>
                )}

                <Select
                  value={formData.enquiryType}
                  onValueChange={(value) => setFormData({ ...formData, enquiryType: value })}
                >
                  <SelectTrigger className="w-full bg-white/70 backdrop-blur-sm">
                    <SelectValue placeholder="Select Enquiry Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="admission">Admission Enquiry</SelectItem>
                    <SelectItem value="general">General Enquiry</SelectItem>
                    <SelectItem value="academic">Academic Enquiry</SelectItem>
                    <SelectItem value="transport">Transport Enquiry</SelectItem>
                    <SelectItem value="fee">Fee Structure Enquiry</SelectItem>
                    <SelectItem value="visit">Schedule a Visit</SelectItem>
                    {/* Job Application Options */}
                    <SelectItem value="job_teacher">Job Application - Teaching</SelectItem>
                    <SelectItem value="job_admin">Job Application - Administrative</SelectItem>
                    <SelectItem value="job_sports">Job Application - Sports Coach</SelectItem>
                    <SelectItem value="career_other">Other Career Opportunity</SelectItem>
                  </SelectContent>
                </Select>

                <div className="space-y-5">
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="w-full px-4 py-2 rounded-lg bg-white/70 backdrop-blur-sm"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />

                  <Input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    className="w-full px-4 py-2 rounded-lg bg-white/70 backdrop-blur-sm"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />

                  {/* Phone verification section */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="relative flex-1">
                        <Input
                          type="tel"
                          name="phone"
                          placeholder="Phone Number (10 digits)"
                          className={`w-full px-4 py-2 rounded-lg ${
                            isPhoneVerified 
                              ? "bg-green-50 border-green-300" 
                              : "bg-white/70 backdrop-blur-sm"
                          }`}
                          value={formData.phone}
                          onChange={(e) => {
                            // Only allow digits and limit to 10 digits
                            const value = e.target.value.replace(/\D/g, '').slice(0, 10);
                            setFormData({ ...formData, phone: value });
                            
                            // Reset verification state if phone number changes
                            if (isPhoneVerified) {
                              setIsPhoneVerified(false);
                            }
                          }}
                          disabled={isPhoneVerified}
                          required
                        />
                        {isPhoneVerified && (
                          <div className="absolute right-3 top-1/2 -translate-y-1/2">
                            <Check className="h-5 w-5 text-green-600" />
                          </div>
                        )}
                      </div>
                      
                      {!isPhoneVerified && (
                        <Button
                          type="button"
                          variant={otpSent ? "outline" : "default"}
                          onClick={sendOTP}
                          disabled={
                            sendingOtp || 
                            !formData.phone || 
                            formData.phone.length !== 10 ||
                            !isValidIndianPhoneNumber(formData.phone)
                          }
                          className="shrink-0 bg-purple-600 hover:bg-purple-700 text-white"
                        >
                          {sendingOtp ? (
                            <>
                              <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                              Sending...
                            </>
                          ) : otpSent ? (
                            resendDisabled ? `Resend in ${resendCounter}s` : "Resend OTP"
                          ) : (
                            "Send OTP"
                          )}
                        </Button>
                      )}
                      
                      {isPhoneVerified && (
                        <Button
                          type="button"
                          variant="outline"
                          onClick={() => {
                            setIsPhoneVerified(false);
                            setOtpSent(false);
                          }}
                          className="shrink-0"
                        >
                          Change
                        </Button>
                      )}
                    </div>
                    
                    {otpSent && !isPhoneVerified && (
                      <div className="flex items-center gap-3">
                        <Input
                          type="text"
                          placeholder="Enter OTP"
                          value={userEnteredOtp}
                          onChange={(e) => {
                            // Only allow digits and limit to 6 digits
                            const value = e.target.value.replace(/\D/g, '').slice(0, 6);
                            setUserEnteredOtp(value);
                          }}
                          className="flex-1 bg-white/70 backdrop-blur-sm"
                          maxLength={6}
                        />
                        <Button
                          type="button"
                          onClick={verifyOTP}
                          disabled={verifyingOtp || userEnteredOtp.length !== 6}
                          className="shrink-0 bg-purple-600 hover:bg-purple-700 text-white"
                        >
                          {verifyingOtp ? (
                            <>
                              <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                              Verifying...
                            </>
                          ) : (
                            "Verify OTP"
                          )}
                        </Button>
                      </div>
                    )}
                    
                    {otpError && (
                      <p className="text-sm text-red-600">{otpError}</p>
                    )}
                  </div>

                  <Input
                    type="text"
                    name="fullAddress"
                    placeholder="Full Address"
                    className="w-full px-4 py-2 rounded-lg bg-white/70 backdrop-blur-sm"
                    value={formData.fullAddress}
                    onChange={(e) => setFormData({ ...formData, fullAddress: e.target.value })}
                    required
                  />

                  <Textarea
                    name="message"
                    placeholder={formData.enquiryType?.includes('job') || formData.enquiryType?.includes('career')
                      ? "Please share your qualifications, experience, and why you want to join our team"
                      : formData.enquiryType === 'visit'
                        ? "Please mention preferred date and time for your visit and purpose"
                        : "Your Message or Query"}
                    className="w-full px-4 py-2 rounded-lg min-h-[120px] bg-white/70 backdrop-blur-sm"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  />
                </div>

                <Button 
                  type="submit"
                  className={`w-full ${isPhoneVerified ? 'bg-purple-600 hover:bg-purple-700' : 'bg-gray-400 cursor-not-allowed'} text-white py-3 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 group`}
                  disabled={isSubmitting || !isPhoneVerified}
                >
                  <span>
                    {isSubmitting  
                      ? 'Submitting...' 
                      : !isPhoneVerified
                        ? 'Verify Phone to Submit'
                        : formData.enquiryType?.includes('job') || formData.enquiryType?.includes('career')
                          ? 'Submit Application'
                          : formData.enquiryType === 'visit'
                            ? 'Schedule Visit'
                            : 'Submit Enquiry'}
                  </span>
                  {isPhoneVerified && <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
                </Button>

                {!isPhoneVerified && (
                  <p className="text-sm text-center text-gray-500">
                    Please verify your phone number to submit the form
                  </p>
                )}
              </form>
            </div>

            {/* Right Section - Information */}
            <div className="space-y-8">
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-sm">
                <h2 className="text-2xl font-semibold text-[#0EA5E9] mb-4">Contact Information</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium text-gray-700">Address</h3>
                    <p className="text-gray-600">123 Education Street, Gorakhpur, Uttar Pradesh, 273001</p>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-700">Phone</h3>
                    <p className="text-gray-600">+91 98765 43210</p>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-700">Email</h3>
                    <p className="text-gray-600">info@sdacademygkp.com</p>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-700">Office Hours</h3>
                    <p className="text-gray-600">Monday to Saturday: 9:00 AM - 5:00 PM</p>
                    <p className="text-gray-600">Sunday: Closed</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 rounded-xl shadow-sm text-white">
                <h2 className="text-2xl font-semibold mb-4">Why Contact Us?</h2>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Get detailed information about our academic programs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Learn about admission procedures and requirements</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Schedule a campus visit to explore our facilities</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Inquire about career opportunities at our institution</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Get answers to any questions about our academy</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Enquiry;
