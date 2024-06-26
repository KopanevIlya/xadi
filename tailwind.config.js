import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';
import Image from "@/Pages/image/women3.png";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.vue',
    ],

    theme: {
        screens: {
            'sm': '640px',
            // => @media (min-width: 640px) { ... }

            'md': '768px',
            // => @media (min-width: 768px) { ... }

            'lg': '1024px',
            // => @media (min-width: 1024px) { ... }

            'xl': '1280px',
            // => @media (min-width: 1280px) { ... }

            '2xl': '1536px',
            // => @media (min-width: 1536px) { ... }
            '3xl': '1920px',
            // 'mobile': '375px',
            // 'tablet': '640px',
            // 'laptop': '1024px',
            // 'desktop': '1280px',
            // 'portrait' : {'row': 'orientation: portrait'},
        },




        extend: {



            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
        },
    },





    plugins: [forms],


};
