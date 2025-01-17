/** @type {import('tailwindcss').Config} */
import type { Config } from 'tailwindcss';

const colors = require('tailwindcss/colors');

const brown_palette = {
  DEFAULT: '#977669',
  light: '#846358',
  dark: '#eaddd7',

  50: '#fdf8f6',
  100: '#f2e8e5',
  200: '#eaddd7',
  300: '#e0cec7',
  400: '#d2bab0',
  500: '#bfa094',
  600: '#a18072',
  700: '#977669',
  800: '#846358',
  900: '#43302b',
};

const tahiti_palette = {
  DEFAULT: '#0e7490',
  light: '#155e75',
  dark: '#a5f3fc',

  100: '#cffafe',
  200: '#a5f3fc',
  300: '#67e8f9',
  400: '#22d3ee',
  500: '#06b6d4',
  600: '#0891b2',
  700: '#0e7490',
  800: '#155e75',
  900: '#164e63',
};
const bubblegum_palette = {
  DEFAULT: '#e41c9a',
  light: '#df008e',
  dark: '#f9d0e5',

  50: '#fce7f3',
  100: '#f9d0e5',
  200: '#f6b2d7',
  300: '#f394ca',
  400: '#f076be',
  500: '#ee58b2',
  600: '#e93aa6',
  700: '#e41c9a',
  800: '#df008e',
  900: '#d90082',
};

const sooty_palette = {
  'tune1-1': '#000',
  'tune1-2': '#1F1F1F',
  'tune1-3': '#262626',

  'tune2-1': '#242424',
  'tune2-2': '#2A2A2A',
  'tune2-3': '#323232',

  'tune3-1': '#3D3D3D',
  'tune3-2': '#474747',
  'tune3-3': '#525252',

  'tune4-1': '#575757',
  'tune4-2': '#616161',
  'tune4-3': '#6B6B6B',

  'tune5-1': '#757575',
  'tune5-2': '#808080',
  'tune5-3': '#8A8A8A',
};
const snowy_palette = {
  'tune1-1': '#FFFFFF',
  'tune1-2': '#F5F6F5',
  'tune1-3': '#EDEDED',

  'tune2-1': '#E0E0E0',
  'tune2-2': '#D3D3D3',
  'tune2-3': '#B3B3B3',
};

const px_numbers = {
  0.2: '0.2px',
  0.4: '0.4px',
  0.8: '0.8px',
  //  ...
  1.2: '1.2px',
  1.4: '1.4px',
  1.8: '1.8px',
  2.2: '2.2px',
  2.4: '2.4px',
  2.8: '3px',
  3: '3px',
  3.4: '3.4px',
  3.8: '3.8px',
  //  ...
  5: '5px',
  6: '6px',
  7: '7px',
  //  ...
  9: '9px',
  10: '10px',
  12: '12px',
  14: '14px',
  16: '16px',
  18: '18px',
  20: '20px',
};

module.exports = {
  darkMode: ['class', '[data-mode="dark"]'],
  // darkMode: 'class',

  content: ['./src/**/*.{js,jsx,ts,tsx}'],

  theme: {
    extend: {
      fontFamily: {
        //  ...
        sans: 'Vazirmatn FD NL',

        vazirMatn: 'Vazirmatn RD',
        vazirMatnFD: 'Vazirmatn FD NL',

        samimFD: 'Samim FD',

        roboto: ['Roboto', 'sans-serif'],
      },

      fontSize: {
        xsm: ['0.8rem', '1.25rem'],
        //  ...
        '10xl': ['16rem', '1'],
      },

      lineHeight: {
        //  ...
        '133%': '133%',
        //  ...
        '185%': '185%',
        //  ...
        'extra-loose': '2.5',
      },

      lineClamp: {
        //  ...
        7: '7',
        8: '8',
        9: '9',
        10: '10',
        14: '14',
        16: '16',
        20: '20',
      },

      colors: {
        primaryColor: 'rgba(var(--color-primary) / <alpha-value>)',
        infoColor: 'rgba(var(--color-info) / <alpha-value>)',
        successColor: 'rgba(var(--color-success) / <alpha-value>)',
        warningColor: 'rgba(var(--color-warning) / <alpha-value>)',

        black: colors.black,
        white: colors.white,
        gray: colors.gray,
        brown: brown_palette,
        emerald: colors.emerald,
        indigo: colors.indigo,
        tahiti: tahiti_palette,
        bubblegum: bubblegum_palette,
        //  ...

        red: {
          primary: '#CE2E2E',
          //  ...
        },

        yellow: {
          primary: '#FFB800',
          //  ...
        },

        metal: {
          primary: '#b6aeae',
          secondary: '#737171',
        },

        Sooty: {
          ...colors.black,
          ...sooty_palette,
        },

        Snowy: {
          ...colors.white,
          ...snowy_palette,
        },

        zinc: {
          ...colors.zinc,
          850: '#212123',
        },
      },

      opacity: {},

      spacing: {
        //  ...
        '5px': '5px',
      },
      space: {
        //  ...
        '3px': '3px',
        '15px': '3px',
      },

      width: {
        //  ...
        128: '32rem',
        '8xl': '90rem',
        '9xl': '100rem',
        '10xl': '120rem',
      },
      minWidth: {
        //  ...
        128: '32rem',
      },
      maxWidth: {
        //  ...
        128: '32rem',
        '8xl': '90rem',
        '9xl': '100rem',
        '10xl': '120rem',
      },

      height: {
        //  ...
        128: '32rem',
      },
      minHeight: {
        //  ...
        128: '32rem',
      },
      maxHeight: {
        //  ...
        128: '32rem',
      },

      size: {
        //  ...
        128: '32rem',
      },

      screens: {
        tablet: [{ min: '300px', max: '1279px' }],

        '1041vw': '1041px',
        // => @media (min-width: 460px && max-width: 1279px) { ... }

        laptop: '1024px',
        // => @media (min-width: 1024px) { ... }

        desktop: '1280px',
        // => @media (min-width: 1280px) { ... }

        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }

        '3xl': '1860px',
        // => @media (min-width: 1860px) { ... }

        '4xl': '1920px',
        // => @media (min-width: 1920px) { ... }
      },

      textDecorationThickness: {
        ...px_numbers,
      },
      textUnderlineOffset: {
        ...px_numbers,
      },

      cursor: {
        default: 'default', // Custom cursor for pointer actions
        pointer: 'pointer', // Custom cursor for pointer actions
        'not-allowed': 'not-allowed', // Custom cursor for pointer actions
      },

      backgroundImage: {
        heroPattern: "url('/img/hero-pattern.svg')",
        'gradient-45': 'linear-gradient(45deg, var(--tw-gradient-stops))',
      },
      backgroundSize: {
        //  ...
        fullHalf: '50% auto, 100% auto',

        4: '1rem',
        8: '2rem',
        16: '4rem',
        32: '8rem',
        48: '12rem',
        64: '16rem',

        // bg-[length:]
      },
      backgroundPosition: {
        //  ...
        semiCenter: 'bottom 50% right 60%',

        // bg-[position:]
      },

      objectPosition: {
        'center-top': 'center top',
        'center-bottom': 'center bottom',
      },

      backdropBlur: {
        xxs: '1px',
        xs: '2px',
        s: '3px',
      },

      zIndex: {},

      borderWidth: {
        DEFAULT: '1px',
        0: '0',
        2: '2px',
        3: '3px',
        5: '5px',
        6: '6px',
        7: '7px',
        8: '8px',
        9: '9px',
        10: '10px',
        12: '12px',
        14: '14px',
        16: '16px',
        18: '18px',
        20: '20px',
        24: '24px',
        28: '28px',
        32: '32px',
        64: '64px',
      },

      borderRadius: {},

      outlineWidth: {},

      ringWidth: {},
      ringOffsetWidth: {},

      animation: {
        shake: 'shake 0.9s cubic-bezier(0.36, 0.07, 0.19, 0.97)',
        shake_loop: 'shake 1.5s infinite',
        popout: 'pop-out 0.3s ease-in-out forwards',
        slider_loop: 'slider-loop 40s linear infinite',
      },
      keyframes: {
        shake: {
          '10%, 90%': { transform: 'translate3d(-1px, 0, 0)' },
          '20%, 80%': { transform: 'translate3d(1.5px, 0, 0)' },
          '30%, 50%, 70%': { transform: 'translate3d(-1.7px, 0, 0)' },
          '40%, 60%': { transform: 'translate3d(1.7px, 0, 0)' },
        },

        'pop-out': {
          '0%': {
            transform: 'scale(0)',
            opacity: '0',
          },
          '50%': {
            transform: 'scale(1.1)',
            opacity: '1',
          },
          '100%': {
            transform: 'scale(1)',
          },
        },

        'slider-loop': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
    },
  },

  plugins: [],
} satisfies Config;
