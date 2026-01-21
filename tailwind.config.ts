import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
       // ========== Colors ==========
      colors: {
        // Game colors
        correct: '#6aaa64', // Green
        present: '#c9b458', // Yellow
        absent: '#787c7e', // Gray
        // UI colors
        background: '#121213',
        'tile-border': '#3a3a3c',
        'tile-border-filled': '#565758',
        'key-bg': '#818384',
        'key-text': '#ffffff',
      },

       // ========== Animation ==========
      animation: {
        'pop':'pop 0.1s ease-in-out',
        'flip':'flip 0.5s ease-in-out',
        'shake':'shake 0.5s ease-in-out',
        'bounce-tile':'bounce-tile 1s ease-in-out',
      },

      // ========== keyframes ==========
      keyframes: {
        // Pop animation (for key press)
        pop: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
          '100%': { transform: 'scale(1)' },
        },

        // flip animation (for tile reveal)
        file: {
          '0%': { transform: 'rotateX(0deg)' },
          '50%': { transform: 'rotateX(-90deg)' },
          '100%': { transform: 'rotateX(0deg)' },
        },

        // Shake animation (for invalid word)
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '10%, 30%, 50%, 70%, 90%': { transform: 'translateX(-5px)' },
          '20%, 40%, 60%, 80%': { transform: 'translateX(5px)' },
        },

        //bounce animation (for correct tile)
        'bounce-tile': {
          '0%, 20%': { transform: 'translateY(0)' },
          '40%': { transform: 'translateY(-30px)' },
          '50%': { transform: 'translateY(5px)' },
          '60%': { transform: 'translateY(-15px)' },
          '80%': { transform: 'translateY(2px)' },
          '100%': { transform: 'translateY(0px)' },
        },

      }
    },
  },
  plugins: [],
};

export default config;