"use client";

import { useState } from "react";

const homePage = (setDigitalId: (digitalId: boolean) => void) => (
  <div className="h-screen">
    <header className="fixed flex justify-between w-full px-2 py-4 text-white bg-blue">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
        </svg>
      </div>
      <div className="font-bold">UFU</div>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
        </svg>
      </div>
    </header>

    <main className="flex flex-col h-full bg-gray pt-14">
      <div></div>

      <div className="flex items-start gap-4 p-4 mt-4 overflow-x-scroll bg-white">
        <div
          className="flex flex-col items-center"
          onClick={() => setDigitalId(true)}
        >
          <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
              fill="currentColor"
              className="w-8 h-8 text-white"
            >
              <path d="M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64zm96 320h64c44.2 0 80 35.8 80 80c0 8.8-7.2 16-16 16H96c-8.8 0-16-7.2-16-16c0-44.2 35.8-80 80-80zm-32-96a64 64 0 1 1 128 0 64 64 0 1 1 -128 0zM144 64h96c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16s7.2-16 16-16z" />
            </svg>
          </div>
          <div className="mt-1 text-xs text-center text-blue">Id Digital</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              fill="currentColor"
              className="w-8 h-8 text-white"
            >
              <path d="M168 80c-13.3 0-24 10.7-24 24V408c0 8.4-1.4 16.5-4.1 24H440c13.3 0 24-10.7 24-24V104c0-13.3-10.7-24-24-24H168zM72 480c-39.8 0-72-32.2-72-72V112C0 98.7 10.7 88 24 88s24 10.7 24 24V408c0 13.3 10.7 24 24 24s24-10.7 24-24V104c0-39.8 32.2-72 72-72H440c39.8 0 72 32.2 72 72V408c0 39.8-32.2 72-72 72H72zM176 136c0-13.3 10.7-24 24-24h96c13.3 0 24 10.7 24 24v80c0 13.3-10.7 24-24 24H200c-13.3 0-24-10.7-24-24V136zm200-24h32c13.3 0 24 10.7 24 24s-10.7 24-24 24H376c-13.3 0-24-10.7-24-24s10.7-24 24-24zm0 80h32c13.3 0 24 10.7 24 24s-10.7 24-24 24H376c-13.3 0-24-10.7-24-24s10.7-24 24-24zM200 272H408c13.3 0 24 10.7 24 24s-10.7 24-24 24H200c-13.3 0-24-10.7-24-24s10.7-24 24-24zm0 80H408c13.3 0 24 10.7 24 24s-10.7 24-24 24H200c-13.3 0-24-10.7-24-24s10.7-24 24-24z" />
            </svg>
          </div>
          <div className="mt-1 text-xs text-center text-blue">Comunica</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 512"
              fill="currentColor"
              className="w-8 h-8 text-white"
            >
              <path d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM609.3 512H471.4c5.4-9.4 8.6-20.3 8.6-32v-8c0-60.7-27.1-115.2-69.8-151.8c2.4-.1 4.7-.2 7.1-.2h61.4C567.8 320 640 392.2 640 481.3c0 17-13.8 30.7-30.7 30.7zM432 256c-31 0-59-12.6-79.3-32.9C372.4 196.5 384 163.6 384 128c0-26.8-6.6-52.1-18.3-74.3C384.3 40.1 407.2 32 432 32c61.9 0 112 50.1 112 112s-50.1 112-112 112z" />
            </svg>
          </div>
          <div className="mt-1 text-xs text-center text-blue">Eventos</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              fill="currentColor"
              className="w-8 h-8 text-white"
            >
              <path d="M416 0C400 0 288 32 288 176V288c0 35.3 28.7 64 64 64h32V480c0 17.7 14.3 32 32 32s32-14.3 32-32V352 240 32c0-17.7-14.3-32-32-32zM64 16C64 7.8 57.9 1 49.7 .1S34.2 4.6 32.4 12.5L2.1 148.8C.7 155.1 0 161.5 0 167.9c0 45.9 35.1 83.6 80 87.7V480c0 17.7 14.3 32 32 32s32-14.3 32-32V255.6c44.9-4.1 80-41.8 80-87.7c0-6.4-.7-12.8-2.1-19.1L191.6 12.5c-1.8-8-9.3-13.3-17.4-12.4S160 7.8 160 16V150.2c0 5.4-4.4 9.8-9.8 9.8c-5.1 0-9.3-3.9-9.8-9L127.9 14.6C127.2 6.3 120.3 0 112 0s-15.2 6.3-15.9 14.6L83.7 151c-.5 5.1-4.7 9-9.8 9c-5.4 0-9.8-4.4-9.8-9.8V16zm48.3 152l-.3 0-.3 0 .3-.7 .3 .7z" />
            </svg>
          </div>
          <div className="mt-1 text-xs text-center text-blue">Restaurantes</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              fill="currentColor"
              className="w-8 h-8 text-white"
            >
              <path d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192H400V448c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192z" />
            </svg>
          </div>
          <div className="mt-1 text-xs text-center text-blue">
            Calendário Acadêmico
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
              fill="currentColor"
              className="w-8 h-8 text-white"
            >
              <path d="M288 0C422.4 0 512 35.2 512 80V96l0 32c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32l0 160c0 17.7-14.3 32-32 32v32c0 17.7-14.3 32-32 32H416c-17.7 0-32-14.3-32-32V448H192v32c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32l0-32c-17.7 0-32-14.3-32-32l0-160c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h0V96h0V80C64 35.2 153.6 0 288 0zM128 160v96c0 17.7 14.3 32 32 32H272V128H160c-17.7 0-32 14.3-32 32zM304 288H416c17.7 0 32-14.3 32-32V160c0-17.7-14.3-32-32-32H304V288zM144 400a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm288 0a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM384 80c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16s7.2 16 16 16H368c8.8 0 16-7.2 16-16z" />
            </svg>
          </div>
          <div className="mt-1 text-xs text-center text-blue">Intercampi</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
              fill="currentColor"
              className="w-8 h-8 text-white"
            >
              <path d="M384 476.1L192 421.2V35.9L384 90.8V476.1zm32-1.2V88.4L543.1 37.5c15.8-6.3 32.9 5.3 32.9 22.3V394.6c0 9.8-6 18.6-15.1 22.3L416 474.8zM15.1 95.1L160 37.2V423.6L32.9 474.5C17.1 480.8 0 469.2 0 452.2V117.4c0-9.8 6-18.6 15.1-22.3z" />
            </svg>
          </div>
          <div className="mt-1 text-xs text-center text-blue">Mapas</div>
        </div>
      </div>

      <div className="p-4 mt-4 bg-white">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              fill="currentColor"
              className="w-5 h-5 text-blue"
            >
              <path d="M416 0C400 0 288 32 288 176V288c0 35.3 28.7 64 64 64h32V480c0 17.7 14.3 32 32 32s32-14.3 32-32V352 240 32c0-17.7-14.3-32-32-32zM64 16C64 7.8 57.9 1 49.7 .1S34.2 4.6 32.4 12.5L2.1 148.8C.7 155.1 0 161.5 0 167.9c0 45.9 35.1 83.6 80 87.7V480c0 17.7 14.3 32 32 32s32-14.3 32-32V255.6c44.9-4.1 80-41.8 80-87.7c0-6.4-.7-12.8-2.1-19.1L191.6 12.5c-1.8-8-9.3-13.3-17.4-12.4S160 7.8 160 16V150.2c0 5.4-4.4 9.8-9.8 9.8c-5.1 0-9.3-3.9-9.8-9L127.9 14.6C127.2 6.3 120.3 0 112 0s-15.2 6.3-15.9 14.6L83.7 151c-.5 5.1-4.7 9-9.8 9c-5.4 0-9.8-4.4-9.8-9.8V16zm48.3 152l-.3 0-.3 0 .3-.7 .3 .7z" />
            </svg>

            <div className="ml-2 text-xl font-bold text-blue">
              Hoje no RU Santa Mônica
            </div>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            fill="currentColor"
            className="w-5 h-5 text-blue"
          >
            <path d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z" />
          </svg>
        </div>

        <div className="mt-5">
          <div className="w-16 rounded-tl rounded-tr bg-gray2 px-3 py-0.5 text-xs text-white">
            Almoço
          </div>
          <div className="w-full px-3 py-1 text-white rounded-r rounded-bl bg-blue">
            Hoje não será servido almoço
          </div>
        </div>

        <div className="mt-3">
          <div className="w-16 rounded-tl rounded-tr bg-gray2 px-3 py-0.5 text-xs text-white">
            Jantar
          </div>
          <div className="w-full px-3 py-1 text-white rounded-r rounded-bl bg-blue">
            Hoje não será servido jantar
          </div>
        </div>

        <div className="flex items-center justify-end gap-1 mt-4 text-xs">
          <div>Ver cardápio completo</div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            fill="currentColor"
            className="w-4 h-4"
          >
            <path d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM294.6 135.1l99.9 107.1c3.5 3.8 5.5 8.7 5.5 13.8s-2 10.1-5.5 13.8L294.6 376.9c-4.2 4.5-10.1 7.1-16.3 7.1C266 384 256 374 256 361.7l0-57.7-96 0c-17.7 0-32-14.3-32-32l0-32c0-17.7 14.3-32 32-32l96 0 0-57.7c0-12.3 10-22.3 22.3-22.3c6.2 0 12.1 2.6 16.3 7.1z" />
          </svg>
        </div>
      </div>
    </main>
  </div>
);

const digitalIdPage = (
  <div className="h-screen">
    <header className="fixed flex justify-between w-full px-2 py-4 text-white bg-blue">
      <div className="flex gap-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 320 512"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
        </svg>
        <div>UFU</div>
      </div>
      <div className="font-bold">ID DIGITAL</div>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
        </svg>
      </div>
    </header>

    <main className="flex h-full flex-col bg-ufu bg-[length:30px_30px] pt-14">
      <div className="h-20 px-5 pt-4 pb-6 bg-center bg-no-repeat bg-contain bg-ufu-header bg-origin-content"></div>

      <div className="h-[100px] border-b-4 border-t-4 border-blue bg-white">
        <div className="absolute ml-[10px] mt-[-17px] h-[130px] w-[130px] rounded-full border-4 border-blue bg-profile-pic bg-cover bg-center"></div>
        <div className="flex h-full flex-col items-center justify-center pl-[150px] pr-[10px] text-center">
          <div className="text-lg font-bold leading-none tracking-normal">
            JOSE DA SILVA NETO
          </div>
          <div className="mt-1 text-sm leading-none">
            GRADUAÇÃO EM ENGENHARIA ELÉTRICA: BACHARELADO - INTEGRAL
          </div>
        </div>
      </div>

      <div className="flex-grow px-5 py-8 mt-5">
        <div className="mx-auto h-full w-[90%] overflow-hidden overflow-y-scroll rounded-[10px] bg-white py-[1px] shadow-[0_0_3px_#3751b8]">
          <div className="px-4 py-1 font-bold border-b border-gray5 bg-gray3 text-gray4">
            Matrícula:
          </div>
          <div className="px-4 py-1 font-medium border-b border-gray5">
            371283182
          </div>
          <div className="px-4 py-1 font-bold border-b border-gray5 bg-gray3 text-gray4">
            CPF:
          </div>
          <div className="px-4 py-1 font-medium border-b border-gray5">
            123.490.023-32
          </div>
          <div className="px-4 py-1 font-bold border-b border-gray5 bg-gray3 text-gray4">
            R.G / Org. Exp.:
          </div>
          <div className="px-4 py-1 font-medium border-b border-gray5">
            MG93209293 - PC/MG
          </div>
          <div className="px-4 py-1 font-bold border-b border-gray5 bg-gray3 text-gray4">
            Naturalidade:
          </div>
          <div className="px-4 py-1 font-medium border-b border-gray5">
            Uberlândia
          </div>
          <div className="px-4 py-1 font-bold border-b border-gray5 bg-gray3 text-gray4">
            Filiação:
          </div>
          <div className="px-4 py-1 font-medium border-b border-gray5">
            <div>Ancelotti</div>
            <div>Carletta</div>
          </div>
          <div className="px-4 py-1 font-bold border-b border-gray5 bg-gray3 text-gray4">
            Data de nascimento:
          </div>
          <div className="px-4 py-1 font-medium border-b border-gray5">
            03/09/2000
          </div>
          <div className="px-4 py-1 font-bold border-b border-gray5 bg-gray3 text-gray4">
            Data de Validade:
          </div>
          <div className="px-4 py-1 font-medium border-b border-gray5">
            30/06/2023
          </div>
        </div>
      </div>
    </main>
  </div>
);

export default function Home() {
  const [digitalId, setDigitalId] = useState(false);

  return digitalId ? digitalIdPage : homePage(setDigitalId);
}
