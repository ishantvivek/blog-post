/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './components/**/*.{js,vue,ts}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './plugins/**/*.{js,ts}',
        './nuxt.config.{js,ts}',
        './node_modules/flowbite.{js,ts}'
    ],
    darkMode: 'class',
    theme: {
        extend: {
            screens: {
                mobile: { max: '767px' },
                laptop: { max: '1350px', min: '768px' }
            },
            colors: {
                'indigo-blue': '#040DE1',
                'purple-100': '#C8B8eF',
                'purple-150': '#DDCFFF'
            },
            boxShadow: {
                nav: '5px 5px 0px -2px #DDCFFF, 5px 5px #040DE1',
                'nav-dark': '5px 5px 0px -2px rgb(17 24 39), 5px 5px #fff'
            }
        }
    },
    plugins: [require('flowbite/plugin')]
};
