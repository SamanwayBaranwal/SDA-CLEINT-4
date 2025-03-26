const { fontFamily } = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-33.33%)' }
        },
        marquee2: {
          '0%': { transform: 'translateX(33.33%)' },
          '100%': { transform: 'translateX(0%)' }
        }
      },
      animation: {
        'gradient': 'gradient 3s ease infinite',
        'fade-in': 'fadeIn 0.5s ease-in',
        'slide-up': 'slideUp 0.5s ease-out',
        'marquee': 'marquee 30s linear infinite',
        'marquee2': 'marquee2 30s linear infinite',
      },
      colors: {
        border: "rgb(229 231 235)",
        input: "rgb(229 231 235)",
        ring: "rgb(99 102 241)",
        background: "rgb(255 255 255)",
        foreground: "rgb(15 23 42)",
        sdblue: "#8B5CF6",
        sdpink: "#D946EF",
        primary: {
          DEFAULT: "rgb(99 102 241)",
          foreground: "rgb(255 255 255)",
        },
        secondary: {
          DEFAULT: "rgb(226 232 240)",
          foreground: "rgb(15 23 42)",
        },
        destructive: {
          DEFAULT: "rgb(239 68 68)",
          foreground: "rgb(255 255 255)",
        },
        muted: {
          DEFAULT: "rgb(241 245 249)",
          foreground: "rgb(100 116 139)",
        },
        accent: {
          DEFAULT: "rgb(226 232 240)",
          foreground: "rgb(15 23 42)",
        },
        popover: {
          DEFAULT: "rgb(255 255 255)",
          foreground: "rgb(15 23 42)",
        },
        card: {
          DEFAULT: "rgb(255 255 255)",
          foreground: "rgb(15 23 42)",
        },
      },
      borderRadius: {
        lg: "0.5rem",
        md: "0.375rem",
        sm: "0.25rem",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
