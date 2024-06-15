<script setup>
import { Head, Link } from '@inertiajs/vue3';
import PrimaryButton from "@/Components/PrimaryButton.vue";

import { fas } from '@fortawesome/free-solid-svg-icons'

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";


import DrodownMenu from "@/Components/DrodownMenu.vue";
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/vue/24/outline'

const navigation = [
  { name: 'О нас', href: '#', current: true },
  { name: 'Проект', href: '#', current: true },
  { name: 'Команда', href: '#', current: false },
  { name: 'Контакты', href: '#', current: false },
]

library.add(fas)



defineProps({
    canLogin: {
        type: Boolean,
    },
    canRegister: {
        type: Boolean,
    },
    laravelVersion: {
        type: String,
        required: true,
    },
    phpVersion: {
        type: String,
        required: true,
    },
});

</script>

<template>

  <Head title="nForm" />
  <Disclosure as="nav" class="bg-white sticky top-0 z-50" v-slot="{ open }">
    <div class="max-w-sm mx-auto sm:max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="relative flex h-16 items-center justify-between">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->
          <DisclosureButton class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
            <span class="absolute -inset-0.5" />
            <span class="sr-only">Open main menu</span>
            <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
            <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
          </DisclosureButton>
        </div>
        <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
          <div class="flex flex-shrink-0 items-center">
            <img class="h-32 w-auto ml-6" src="../Pages/image/logotip.png" alt="Your Company" />
          </div>
          <div class="hidden sm:ml-36 sm:block sm:pt-11">
            <div class="flex space-x-9">
              <a v-for="item in navigation" :key="item.name" :href="item.href" :class="[item.current ? ' text-black' : 'text-black  ', 'rounded-md hover:text-cyan-800 hover:bg-gray-300 text-black px-3 py-2 text-md font-bold']" :aria-current="item.current ? 'page' : undefined">{{ item.name }}</a>
            </div>
          </div>
        </div>

          <div v-if="canLogin" class="sticky z-0 inset-y-0 right-0 flex items-center  sm:static sm:inset-auto sm:ml-10 ">
            <Link
                v-if="$page.props.auth.user"
                :href="route('dashboard')"
                class="hover:text-cyan-800 hover:bg-gray-300 bg-cyan-800 text-white rounded-md px-1 py-2 text-sm sm:text-md font-bold">
              Dashboard</Link>

            <template v-else >
              <Link
                  :href="route('register')"
                  class="hover:text-cyan-800 hover:bg-gray-300 bg-cyan-800 text-white rounded-md px-1 sm:px-2 py-1 sm:py-2 text-sm sm:text-md font-bold"
              ><button class="btn max-w-sm">Регистрация</button></Link>

              <Link
                  :href="route('login')"
                  class=" hover:text-cyan-800 hover:bg-gray-300 bg-cyan-800 text-white rounded-md mx-1 px-1 sm:px-2 py-1 sm:py-2 text-sm sm:text-md font-bold">
                <button class="btn max-w-sm">Войти</button></Link>
            </template>
          </div>

      </div>
    </div>

    <DisclosurePanel class="sm:hidden">
      <div class="space-y-1 px-2 pb-3 pt-2">
        <DisclosureButton v-for="item in navigation" :key="item.name" as="a" :href="item.href" :class="[item.current ? ' text-gray-300 hover:bg-gray-700 hover:text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'block rounded-md px-3 py-2 text-base font-medium']" :aria-current="item.current ? 'page' : undefined">{{ item.name }}</DisclosureButton>
      </div>
    </DisclosurePanel>
  </Disclosure>


  <div class="w-full relative bg-no-repeat bg-cover h-[600px] z-0 overflow-hidden" style="background-image: url('https://i.pinimg.com/564x/ad/b3/f9/adb3f94940c82b46498613704b9cbec2.jpg');">
    <div class="relative top-0 left-0 w-full h-full z-10 bg-cyan-800/40 flex items-center justify-center flex-col gap-5 ">
      <h2 class=" text-2xl sm:text-5xl font-bold font-serif text-center bg-gradient-to-r from-cyan-600 via-cyan-300 to-cyan-600 inline-block text-transparent bg-clip-text">Социально ответственное инвестирование</h2>
      <h6 class="sm:mr-16 text-lg sm:text-3xl font-semibold text-center font-serif bg-gradient-to-r from-cyan-600 via-cyan-300 to-cyan-600 inline-block text-transparent bg-clip-text "><a class="font-bold text-white hover:text-white cursor-pointer" target="_blank" href="https://nform.work/">nForm</a> швейцарская ассоциация</h6>
      <button type='button' class='py-2.5 px-6 text-sm rounded-lg bg-transparent border border-cyan-800  text-cyan-700 cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 hover:bg-white/25 hover:text-white'>Добро пожаловать!</button>

    </div>
  </div>





  <div class="flex flex-shrink-0 justify-center items-center  ">
    <img class="max-h-44  pt-6 w-auto" src="../Pages/image/квадрат1.png" alt="Your Company">
    <p class=" text-center text-sm sm:text-2xl text-cyan-800 font-bold mr-20  font-serif ">Взаимодействие с клиентами: основные способы и правила</p>
  </div>



  <div class="grid sm:grid-cols-3 sm:gap-3  gap-6  sm:mx-20 "  >

    <div class="max-w-sm mx-auto  bg-white rounded-tr-2xl rounded-bl-2xl border-2 border-opacity-40 border-cyan-800 shadow-lg shadow-cyan-800  sm:max-w-xl">
      <img class="relative  animate-bounce object-cover w-14 h-14 bg-cyan-800 rounded-full  z-0 shadow-2xl shadow-gray-600" src="../Pages/image/function.png" alt="">
      <div class="sm:flex  ">
       <div class="p-6  ">
          <div class="uppercase tracking-wide text-sm text-cyan-800 font-semibold ">Как и почему кто-то может лучше всего инвестировать в вас:</div>
          <p class="mt-2 text-slate-500"> Лучшая инвестиция, которую кто-то может сделать в жизни — это инвестировать в себя! Сделайте пожертвование в пользу
            <a href="https://nform.work/" class="underline text-slate-500"><b>nform.work</b></a>  на сумму минимум <b class="text-red-700">25₣</b>
            (швейцарских франков) и позвольте нам организовать встречу с профессионалом, чтобы оценить вашу истинную цель в жизни!</p>
        </div>
      </div>
    </div>



    <div class="max-w-sm mx-auto   bg-white rounded-tr-2xl rounded-bl-2xl border-2 border-opacity-40 border-cyan-800 shadow-lg shadow-cyan-800  sm:max-w-xl">
      <img class="relative animate-bounce object-cover w-14 h-14  bg-cyan-800 rounded-full  z-0 shadow-2xl shadow-gray-600 pt-2 " src="../Pages/image/22.png" alt="">
      <div class="sm:flex">
     <div class="p-6">
          <div class="uppercase tracking-wide text-sm text-cyan-800 font-semibold">Как и зачем инвестировать в себя:</div>
       <p class="mt-2  text-slate-500">Сделайте бесплатное пожертвование деньгами или помогите
         в некоммерческую организацию <a href="https://nform.work/" class="underline text-slate-500"><b>nform.work</b></a>
         и получите персональную оценку навыков и индивидуальный план действий.</p>
        </div>
      </div>
    </div>



    <div class="max-w-sm mx-auto bg-white rounded-tr-2xl rounded-bl-2xl shadow-lg shadow-cyan-800 border-opacity-40 border-cyan-800 border-2 sm:max-w-xl">
      <img class="relative animate-bounce object-cover w-14 h-14 bg-cyan-800 rounded-full  z-0 shadow-2xl shadow-gray-600" src="../Pages/image/55.png" alt="">
      <div class="md:flex">
       <div class="p-6">
          <div class="uppercase tracking-wide text-sm text-cyan-800 font-semibold">Как вы можете инвестировать в других и почему вам это следует делать:</div>
         <p class="mt-2 text-slate-500">Пожертвуйте <b class="text-red-700 hover:accent-red-900">100₣</b>
           (швейцарских франков) или больше в пользу <a href="https://nform.work/" class="underline text-slate-500"><b>nform.work</b></a> и найдите идеальных партнеров для развития.
            В зависимости от индивидуальных потребностей может быть согласована дополнительная цена.</p>
        </div>
      </div>
    </div>


  </div>




  <div class="flex flex-shrink-0 justify-center items-center mx-10 ">
    <img class="max-h-44 pt-2 min-w-auto ml-10" src="../Pages/image/logotip.png" alt="Your Company">
    <p class=" w-[550px]  text-center sm:text-2xl text-cyan-800 font-bold  font-serif ">Коротко обо мне ...</p>
  </div>

  <div class="max-w-sm mx-auto bg-white rounded-xl  drop-shadow-2xl overflow-hidden sm:max-w-6xl ">
    <div class="sm:flex">
      <div class="sm:shrink-0">
        <img class="h-96 w-full object-cover sm:h-full sm:w-96 " src="../Pages/image/foto.png" alt="Modern building architecture">
      </div>
      <div class="p-8">
        <div class="uppercase tracking-wide text-sm text-gray-500 font-semibold">Моя история</div>

        <p class="mt-2 text-slate-500 text-sm sm:text-lg">Я основатель <a class="text-sky-400 after:content-['_↗'] " target="_blank" href="https://nform.work/"><b>nFORM</b></a> Тим Клэйссенс. Более 20 лет опыта в области автоматизации и ИТ-консультирования для транснациональных компаний розничной торговли.
          Стремлюсь постоянно совершенствоваться, работая более 20 лет в сфере ИТ.
          В более позднем возрасте я узнал, что принадлежу к спектру аутизма и что многие ИТ-специалисты и многочисленные успешные люди потенциально тоже входят в этот спектр .
          Понимание себя и других сделало меня более уверенным.
          Я понял, что инвестирование в развитие навыков эмоционального и социального интеллекта — лучшее решение, которое можно принять.
        </p>
      </div>
    </div>
  </div>




  <div class="grid sm:grid-cols-1 sm:gap-1 gap-1 min-w-[250px] rounded-bl-2xl rounded-tr-2xl border-t-2 border-b-2 border-cyan-800 mx-10 my-16 ">
    <div class="text-center min-h-12  text-slate-500 uppercase tracking-wide text-sm sm:text-lg font-bold  font-serif py-6">Часто задаваемые вопросы:</div>
  </div>


  <div class=" grid sm:grid-cols-1 sm:gap-1 gap-1 min-w-[250px] mx-auto  ">
  <div class="  text-center min-h-20  text-slate-500 text-md font-bold  font-serif hover:underline">Каковы общие проблемы для функциональных<br>
    взрослыx людей с аутизмом?</div>
  </div>

  <div class=" grid sm:grid-cols-5 sm:gap-2 gap-2 min-w-auto  px-10 mb-10  text-sm sm:text-md ">

  <div class=" sm:text-center  px-3 py-2   sm:min-h-24 border-cyan-800 border-2  shadow-2xl rounded-md sm:shadow-cyan-800 hover:bg-gray-200 hover:text-black  bg-cyan-800  text-white font-normal  " > Боритесь с внезапными переменами.</div>
    <div class="  sm:text-center   px-3 py-2  sm:min-h-24 border-cyan-800 border-2 rounded-md shadow-2xl sm:shadow-cyan-800 hover:bg-gray-200 hover:text-black  bg-cyan-800  text-white font-normal  "> Проблемы с неявным или двусмысленным общением.</div>
      <div class="  sm:text-center px-3 py-2  sm:min-h-24 border-cyan-800 border-2 rounded-md shadow-2xl sm:shadow-cyan-800 hover:bg-gray-200 hover:text-black  bg-cyan-800  text-white font-normal  "> Отсутствие чувства голода, сонливости, усталости или боли.</div>
      <div class="  sm:text-center px-3 py-2   sm:min-h-24 border-cyan-800 border-2 rounded-md shadow-2xl sm:shadow-cyan-800 hover:bg-gray-200 hover:text-black  bg-cyan-800  text-white font-normal "> Множественные фиксированные интересы и циклические действия.</div>
    <div class=" sm:text-center   px-3 py-2   sm:min-h-24  border-cyan-800 border-2 shadow-2xl rounded-md sm:shadow-cyan-800 hover:bg-gray-200 hover:text-black  bg-cyan-800  text-white font-normal "> Иногда блокируется негативным мышлением или моделями поведения.</div>
    <div class="  sm:text-center  px-3 py-2   sm:min-h-32 border-cyan-800 border-2  rounded-md shadow-2xl sm:shadow-cyan-800 hover:bg-gray-200 hover:text-black  bg-cyan-800  text-white font-normal "> Избегайте людных мест с чрезмерно возбуждающей обстановкой.</div>
    <div class="  sm:text-center px-3 py-2   sm:min-h-32 border-cyan-800 border-2 shadow-2xl rounded-md sm:shadow-cyan-800 hover:bg-gray-200 hover:text-black  bg-cyan-800  text-white font-normal "> Чувствителен к перенапряжению . Нарушенные циркадные ритмы.</div>
      <div class="  sm:text-center  px-3 py-2   sm:min-h-32 border-cyan-800 border-2 shadow-2xl rounded-md sm:shadow-cyan-800 hover:bg-gray-200 hover:text-black  bg-cyan-800  text-white font-normal "> Интонация речи и мимика лица не всегда соответствовали настроению ситуации.</div>
      <div class="  sm:text-center px-2 py-2  sm:min-h-32 border-cyan-800 border-2  shadow-2xl rounded-md sm:shadow-cyan-800 hover:bg-gray-200 hover:text-black  bg-cyan-800  text-white font-normal ">Избегание любой формы общения или привязанности в течение определенных неопределенных периодов времени.</div>
    <div class="  sm:text-center  px-2 py-2   sm:min-h-32 border-cyan-800 border-2 rounded-md shadow-2xl sm:shadow-cyan-800 hover:bg-gray-200 hover:text-black  bg-cyan-800  text-white font-normal "> Часто слишком честны и щедры , чтобы поддерживать определенные дружеские или профессиональные отношения без проблем.</div>

  </div>


  <div class="max-w-sm mx-auto bg-white overflow-hidden sm:max-w-6xl mt-20">
    <div class="sm:flex">
      <div class="sm:shrink-0">
        <img class="h-[450px] w-full object-cover sm:h-full sm:w-[400px] border-4 border-cyan-800 rounded-tr-2xl rounded-bl-2xl" src="../Pages/image/grid1.jpg" alt="Modern building architecture">
      </div>
      <div class="w-auto rounded-xl border-solid border-cyan-800 border-2 mt-20 sm:mt-10 sm:ml-20 ml-0"></div>
      <div class="pl-0 sm:pl-32 sm:pt-20 pt-10 ">
        <div class="uppercase tracking-wide text-sm sm:text-lg text-cyan-800 font-bold font-serif">Сильные стороны:</div>
      <div class="mt-8 text-slate-500">
        <ul class=" text-sm sm:text-lg">
          <li>Глубокие знания или определенные области интересов без ограничений на сбор информации.</li>
          <li>Мыслит нестандартно и может быть очень креативным.</li>
          <li>Поддерживает и формирует хорошие привычки и стремится к постоянному совершенствованию.</li>
          <li>Способен гиперфокусироваться и обращать внимание на детали или специфические (зрительные или слуховые) качества памяти.</li>
          <li>Гиперэмпатичен , способен отказаться от корысти и придерживается принципов.</li>
          <li>Легко находите несоответствия .</li>
        </ul>
      </div>
      </div>
    </div>
  </div>



  <div class=" flex justify-center items-start h-[20px] w-full desktop:text-2xl text-center  mt-20 mb-16 text-cyan-800 font-bold font-serif ">
    <img class="absolute sm:left-20 w-56 h-56 -mt-40 sm:-mt-32 -rotate-12 animate-pulse"   src="../Pages/image/прозрачный-фигура.png" alt="">
    <img class="relative z-0 object-cover w-44  left-10 -mt-7  " src="../Pages/image/квадрат.png" alt="">
    <h1 class="text-sm sm:text-2xl font-bold font-serif mr-10 sm:mr-0 ">Польза в нашей жизни, все ли мы полезны для других?</h1>
    <img class="absolute sm:right-[30px] w-64 h-64 -mt-56 sm:-mt-72  -rotate-45  animate-pulse"   src="../Pages/image/фигура.png" alt="">
  </div>



  <div class="max-w-sm mx-auto  overflow-hidden sm:max-w-7xl mb-5">
    <div class="sm:flex">
      <img class="absolute sm:left-30 z-40 max-h-72 opacity-30  " src="../Pages/image/01.png" alt="">
      <div class="p-8">
        <div class="uppercase tracking-wide text-sm text-cyan-800 rounded-tr-full rounded-br-full shadow-lg  border-2 bg-gray-300 py-2 text-center font-semibold">Навыки, которые могут помочь каждому:</div>
        <ol class="mt-2 text-black">
          <li>Способность войти в контакт с эмоциями, прояснить намерения и избежать противоположной динамики.</li>
          <li>Умение обращаться с властью и (не)справедливостью.</li>
          <li>Учимся вести переговоры и выражать потребности и цели.</li>
          <li>Ожидайте изменений, сбоев или ндостатков.</li>
          <li>Повышайте самооценку и самооценку и перестаньте угождать людям.</li>
          <li>Стройте устойчивые отношения и используйте четкое общение.</li>
        </ol>
      </div>
      <div class="sm:shrink-0">
        <img class="h-64 w-full  object-cover sm:h-full sm:w-[400px] rounded-md shadow-lg shadow-gray-800 mt-8" src="../Pages/image/0001.jpg" alt="Modern building architecture">
      </div>
    </div>
  </div>

  <div class="max-w-sm mx-auto  overflow-hidden sm:max-w-7xl mb-2">
    <div class="sm:flex">
      <div class="sm:shrink-0">
        <img class="absolute sm:left-30 z-40 max-h-72 opacity-40 mb-28  " src="../Pages/image/02.png" alt="">
      </div>
      <div class="p-8">
        <div class="uppercase tracking-wide text-sm text-cyan-800 rounded-tr-full rounded-br-full shadow-lg  border-2 bg-gray-300 py-2 text-center font-semibold">Как инвестировать в себя и в других?</div>
 <ol class="mt-2 text-black">
   <li>С помощью профессионального коучинга и консультирования.</li>
   <li>Обучение профессиональным и межчеловеческим навыкам.</li>
   <li>Придерживайтесь новых языков, технологий, творчества и искусства.</li>
   <li>Создайте свою сеть доверенных лиц .</li>
   <li>Защитите себя и других от мошенничества, жестокого обращения, несчастий и изоляции.</li>
 </ol>
      </div>
      <img class="h-64 w-full sm:ml-[130px] object-cover  sm:h-full sm:w-[400px] rounded-md shadow-gray-800 shadow-lg mt-8" src="../Pages/image/001.jpg" alt="Modern building architecture">

    </div>
  </div>


  <div class="max-w-sm mx-auto  overflow-hidden sm:max-w-7xl mb-2">
    <div class="sm:flex">
      <div class="sm:shrink-0">
        <img class="absolute sm:left-30 z-40 max-h-72 opacity-40 mb-28  " src="../Pages/image/03.png" alt="">
      </div>
      <div class="p-8">
        <div class="uppercase tracking-wide text-sm text-cyan-800 rounded-tr-full rounded-br-full shadow-lg  border-2 bg-gray-300 py-2 text-center font-semibold">Как получить поддержку и инвестиции?</div>
        <ol class="mt-2 text-black">
          <li>Привилегированные предпринимательские пути.</li>
          <li>Поощрение путешествовать, встречаться и сотрудничать с людьми разных культур с потенциально разным менталитетом.</li>
          <li>Узнайте, как вы можете принести пользу другим и как другие могут быть значимы для вас.</li>
          <li>Ищите спонсора или наставника.</li>
        </ol>
      </div>
      <img class="h-64 w-full sm:ml-[130px] object-cover  sm:h-full sm:w-[400px] rounded-md shadow-gray-800 shadow-lg mt-8" src="../Pages/image/03.jpg" alt="Modern building architecture">

    </div>
  </div>

  <div class="max-w-sm mx-auto  overflow-hidden sm:max-w-7xl mb-2">
    <div class="sm:flex">
      <div class="sm:shrink-0">
        <img class="absolute sm:left-30 z-40 max-h-72 opacity-40 mb-28  " src="../Pages/image/04.png" alt="">
      </div>
      <div class="p-8">
        <div class="uppercase tracking-wide text-sm text-cyan-800 rounded-tr-full rounded-br-full shadow-lg  border-2 bg-gray-300 py-2 text-center font-semibold">Какую ценность можно создать или обменять помимо денег?</div>
        <ol class="mt-2 text-black">
          <li>Быстрое решение, основанное на быстрой прибыли, может привести к большим потерям позже.</li>
          <li>Часто составить карту намерений, целей и последствий наших предполагаемых рассчитанных действий очень сложно, и часто интуиция и личность играют большую роль в таком поведении.</li>
          <li>Ценность может быть такой: доверие, безопасность, опыт, знания, подтверждение знаний и опыта, доказательство честности, простота обмена и трансформация ценностей .</li>

        </ol>
      </div>
      <img class="h-64 w-full  object-cover  sm:h-full sm:w-[400px] rounded-md shadow-gray-800 shadow-lg mt-8" src="../Pages/image/nform.png" alt="Modern building architecture">

    </div>
  </div>


  <div class="max-w-sm mx-auto  overflow-hidden sm:max-w-7xl mb-16">
    <div class="sm:flex">
      <div class="sm:shrink-0">
        <img class="absolute sm:left-30 z-40 max-h-72 opacity-40 mb-28  " src="../Pages/image/05.png" alt="">
      </div>
      <div class="p-8">
        <div class="uppercase tracking-wide text-sm text-cyan-800 border-2  rounded-tr-full rounded-br-full  shadow-lg bg-gray-300 py-2 px-2 text-center font-semibold">Предпринимательство: прибыль или не прибыль?</div>
        <ol class="mt-2 text-black">
          <li>Каждая зарегистрированная форма корпорации имеет свои преимущества и недостатки.</li>
          <li>Всегда полезно начать с того места, где вы находитесь, и стремиться к установлению подходящего партнера.</li>
          <li>Я верю, что хороший баланс между саморазвитием и альтруистическим разделением ценностей является лучшим и наиболее устойчивым способом улучшения жизни людей.</li>
          <li>Моя цель — создать структуры, которые соединят различные рынки и места по всему миру, что позволит каждому участнику одновременно расти симбиотически и устойчиво.</li>
          <li>Создание устойчивых цифровых продуктов, позволяющих обмениваться знаниями и консолидировать ценности. Инвестирование в местные рынки.</li>
        </ol>
      </div>
      <img class="h-64 w-full  object-cover  sm:h-full sm:w-[400px] rounded-md shadow-gray-800 shadow-lg mt-8" src="../Pages/image/005.jpg " alt="Modern building architecture">

    </div>
  </div>


  <div class="w-full relative bg-no-repeat bg-cover h-[400px] z-0 overflow-hidden" style="background-image: url('https://i.pinimg.com/564x/e6/06/12/e60612233de3f2329df6b247f51e80a9.jpg');">
    <div class="relative top-0 left-0 w-full h-full z-10 bg-cyan-800/65 flex items-center justify-center flex-col gap-5 ">
     <span class=" text-center ">
        <button type='button' class='m-4 sm:m-8 py-2.5 sm:py-5 px-6 text-sm uppercase rounded-lg bg-cyan-800 border border-white shadow-lg shadow-gray-800 text-white cursor-pointer font-serif font-semibold text-center shadow-xs transition-all duration-500 hover:bg-white/25 hover:text-white'>Покажите миру свои таланты и блеск!</button>
     <button type='button' class='m-4 sm:m-8 py-2.5 sm:py-5 px-6 text-sm uppercase rounded-lg bg-cyan-800 border border-white shadow-lg shadow-gray-800 text-white cursor-pointer font-serif font-semibold text-center shadow-xs transition-all duration-500 hover:bg-white/25 hover:text-white'>
       Постройте свой мир, в котором<br>
       вы процветаете и развиваетесь на своих условиях.
     </button>
     <button type='button' class='m-4 sm:m-8 py-2.5 sm:py-5 px-6 text-sm uppercase rounded-lg bg-cyan-800 border border-white shadow-lg shadow-gray-800 text-white cursor-pointer font-serif font-semibold text-center shadow-xs transition-all duration-500 hover:bg-white/25 hover:text-white'>Ваши условия и ваш темп!</button>

     </span>
     </div>
  </div>








  <div class="max-w-sm mx-auto  overflow-hidden sm:max-w-6xl mb-10 sm:mb-20  py-16  ">
    <div class="sm:flex">
      <div class="sm:shrink-0">
        <img class="h-[600px] object-cover w-full rounded-md bg-cyan-800 px-2 py-2 sm:shadow-2xl shadow-gray-800  sm:h-full sm:w-[400px]" src="../Pages/image/book.jpg " alt="Modern building architecture">

      </div>
      <div class="p-8">

        <div class="uppercase tracking-wide bg-gray-300 sm:text-md text-sm font-serif text-cyan-800 font-bold  sm:ml-32 sm:mt-7 sm:shadow-2xl shadow-gray-500 rounded-md  px-4 py-4 ">Начните свое путешествие с покупки <br> этой электронной книги о регистрации <br>ООО в разных странах
          <br><br><button class="btn text-sm sm:text-md  bg-cyan-800 border-2 border-gray-500 hover:bg-slate-400 shadow-2xl shadow-gray-800 font-bold text-white uppercase tracking-wide rounded-xl py-2  px-8"><a href="https://payhip.com/b/UDAzO"> читать</a></button>
        </div>
        <br>
        <button class="btn sm:ml-16 uppercase tracking-wide font-serif border-2 border-gray-500 sm:text-md text-sm bg-cyan-800
         font-bold hover:bg-slate-400 text-white shadow-2xl shadow-gray-800 rounded-tl-xl rounded-bl-xl rounded-tr-xl py-2 px-8 sm:mt-10"><a href="https://calendar.google.com/calendar/u/0/r?cid=dGltY2xhZXlzc2Vuc0BnbWFpbC5jb20&pli=1">Забронируйте встречу!</a></button>
        <br>
        <div class="uppercase bg-gray-300 sm:shadow-2xl shadow-gray-500 rounded-md  font-serif px-6 py-6 tracking-wide sm:ml-32 mt-7 sm:mt-14 sm:text-md text-sm text-cyan-800 font-semibold ">Пригласите меня на кофе,<br>
          если вы живете недалеко от Женевы
          <br><br><button  class="btn text-sm sm:text-md   bg-cyan-800 border-2 border-gray-500 hover:bg-slate-400
           shadow-2xl shadow-gray-800 font-bold text-white uppercase tracking-wide rounded-xl py-2  px-8"><a href="https://ko-fi.com/nform">Предложить кофе</a></button>
          <img class=" object-cover w-[150px] h-[150px] rounded-2xl border-cyan-800 border-4  -mt-[100px] sm:shadow-cyan-800 sm:shadow-2xl ml-[355px] rotate-12" src="../Pages/image/coffe.jpg" alt=""/>

        </div>

      </div>


    </div>
  </div>
















  <!-- component -->
  <footer class="footer-1 bg-gray-100 py-8 sm:py-12">
    <div class="container mx-auto px-4">
      <div class="sm:flex sm:flex-wrap sm:-mx-4 md:py-4">
        <div class="px-4 sm:w-1/2 md:w-2/4 xl:w-2/6">
          <h5 class="text-xl font-bold mb-6">Сделать пожертвование:</h5>
          <ul class="list-none footer-links">
            <li class="mb-2">
              <a href="#" class="border-b border-solid border-transparent font-bold hover:border-black hover:text-black">IBAN: CH33 0900 0000 1608 9762 3
              <br>БИК: POFICHBEXXX</a>
            </li>
            <li class="mb-2">
              <a href="#" class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Название: nForm Женева.</a>
              <p>Обратите внимание: поскольку это стартовая ассоциация,

                свидетельств о пожертвовании<br> для освобождения от уплаты налогов пока НЕТ.</p>
            </li>

          </ul>
        </div>
        <div class="px-4 sm:w-1/2 md:w-2/4 xl:w-2/6 mt-8 sm:mt-0">
          <ul class="list-none footer-links">
            <li class="mb-2">
              <p class="sm:mt-11">
                nform.work поддерживает швейцарскую некоммерческую организацию,<br>
                nForm поддержка людей с расстройствами аутистического спектра и нейроразнообразием.



              </p>
            </li>
          </ul>
        </div>

        <div class="px-4 mt-4 sm:w-1/3 xl:w-1/6 sm:mx-auto xl:mt-0 xl:ml-auto">
          <h5 class="text-xl font-bold mb-6 sm:text-center xl:text-left">Контакты:</h5>
          <div class="flex sm:justify-center xl:justify-start">
            <a href="https://www.facebook.com/nform.ch" class="w-8 h-8  rounded-full text-center  text-gray-600 hover:text-white hover:bg-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"/></svg>

            </a>
            <a href="https://t.me/TjlsTelegramId" class="w-8 h-8  rounded-full text-center  ml-2 text-gray-600 hover:text-white hover:bg-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M248 8C111 8 0 119 0 256S111 504 248 504 496 393 496 256 385 8 248 8zM363 176.7c-3.7 39.2-19.9 134.4-28.1 178.3-3.5 18.6-10.3 24.8-16.9 25.4-14.4 1.3-25.3-9.5-39.3-18.7-21.8-14.3-34.2-23.2-55.3-37.2-24.5-16.1-8.6-25 5.3-39.5 3.7-3.8 67.1-61.5 68.3-66.7 .2-.7 .3-3.1-1.2-4.4s-3.6-.8-5.1-.5q-3.3 .7-104.6 69.1-14.8 10.2-26.9 9.9c-8.9-.2-25.9-5-38.6-9.1-15.5-5-27.9-7.7-26.8-16.3q.8-6.7 18.5-13.7 108.4-47.2 144.6-62.3c68.9-28.6 83.2-33.6 92.5-33.8 2.1 0 6.6 .5 9.6 2.9a10.5 10.5 0 0 1 3.5 6.7A43.8 43.8 0 0 1 363 176.7z"/></svg>
            </a>
            <a href="https://www.linkedin.com/company/nform-ch" class="w-8 h-8   text-center  ml-2 text-gray-600 hover:text-white hover:bg-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg>

            </a>
            <a href="https://chat.whatsapp.com/Kh5nz3DhTSMBc00BdelIbN" class="w-8 h-8 ml-2 rounded-full text-center  text-gray-600 hover:text-white hover:bg-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/></svg>

            </a>
            <a href="https://instagram.com/nform.ch" class="w-8 h-8 rounded-xl  text-center  ml-2 text-gray-600 hover:text-white hover:bg-gray-400 ">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>

            </a>

          </div>
        </div>
      </div>


    </div>
  </footer>

</template>


<style>

.bg-dots-darker {
  background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.22676 0C1.91374 0 2.45351 0.539773 2.45351 1.22676C2.45351 1.91374 1.91374 2.45351 1.22676 2.45351C0.539773 2.45351 0 1.91374 0 1.22676C0 0.539773 0.539773 0 1.22676 0Z' fill='rgba(0,0,0,0.07)'/%3E%3C/svg%3E");
}
@media (prefers-color-scheme: dark) {
  .dark\:bg-dots-lighter {
    background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.22676 0C1.91374 0 2.45351 0.539773 2.45351 1.22676C2.45351 1.91374 1.91374 2.45351 1.22676 2.45351C0.539773 2.45351 0 1.91374 0 1.22676C0 0.539773 0.539773 0 1.22676 0Z' fill='rgba(255,255,255,0.07)'/%3E%3C/svg%3E");
  }
}


</style>
