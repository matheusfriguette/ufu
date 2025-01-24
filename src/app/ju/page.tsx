"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const homePage = (
  setDigitalId: (digitalId: boolean) => void,
  currentSlide: number,
  setCurrentSlide: (currentSlide: number) => void
) => (
  <div className="min-h-screen">
    <header className="fixed top-0 z-10 flex h-10 w-full items-center justify-between bg-blue px-2 text-white">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          fill="currentColor"
          className="h-6 w-6"
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
          className="h-6 w-6"
        >
          <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
        </svg>
      </div>
    </header>

    <main className="flex h-full flex-col bg-gray py-10">
      <div className="relative h-[200px] bg-transparent text-center">
        {currentSlide === 1 && (
          <div className="relative h-full w-full overflow-hidden bg-banner-1 bg-cover bg-center">
            <div className="absolute bottom-0 left-0 h-full w-full bg-gradient-to-b from-transparent to-black text-left text-white">
              <div className="absolute bottom-0 left-0 w-full px-4 py-2">
                <div className="font-semibold">
                  Projeto de extensão promove jornada de ciência aberta na
                  prática
                </div>
                <div className="text-right text-xs">6 horas atrás</div>
              </div>
            </div>
          </div>
        )}
        {currentSlide === 2 && (
          <div className="relative h-full w-full overflow-hidden bg-banner-2 bg-cover bg-center">
            <div className="absolute bottom-0 left-0 h-full w-full bg-gradient-to-b from-transparent to-black text-left text-white">
              <div className="absolute bottom-0 left-0 w-full px-4 py-2">
                <div className="font-semibold">
                  Estudo da UFU, em parceria com a Fiocruz, reafirma segurança
                  da vacinação contra a covid-19 mesmo em indivíduos com
                  alergias respiratórias
                </div>
                <div className="text-right text-xs">12 horas atrás</div>
              </div>
            </div>
          </div>
        )}
        {currentSlide === 3 && (
          <div className="relative h-full w-full overflow-hidden bg-banner-3 bg-cover bg-center">
            <div className="absolute bottom-0 left-0 h-full w-full bg-gradient-to-b from-transparent to-black text-left text-white">
              <div className="absolute bottom-0 left-0 w-full px-4 py-2">
                <div className="font-semibold">
                  Genialidade em foco: explorando o mundo das pessoas
                  superdotadas
                </div>
                <div className="text-right text-xs">17 horas atrás</div>
              </div>
            </div>
          </div>
        )}

        <div className="absolute bottom-0 left-0 w-full">
          <div className="flex items-center justify-center gap-2 py-2">
            <div
              className={`h-3 w-3 rounded-full bg-white ${
                currentSlide === 1 ? "opacity-100" : "opacity-50"
              }`}
              onClick={() => setCurrentSlide(1)}
            ></div>
            <div
              className={`h-3 w-3 rounded-full bg-white ${
                currentSlide === 2 ? "opacity-100" : "opacity-50"
              }`}
              onClick={() => setCurrentSlide(2)}
            ></div>
            <div
              className={`h-3 w-3 rounded-full bg-white ${
                currentSlide === 3 ? "opacity-100" : "opacity-50"
              }`}
              onClick={() => setCurrentSlide(3)}
            ></div>
          </div>
        </div>
      </div>

      <div className="mt-4 flex items-start gap-4 overflow-x-scroll bg-white p-4">
        <div
          className="flex flex-col items-center"
          onClick={() => setDigitalId(true)}
        >
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
              fill="currentColor"
              className="h-8 w-8 text-white"
            >
              <path d="M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64zm96 320h64c44.2 0 80 35.8 80 80c0 8.8-7.2 16-16 16H96c-8.8 0-16-7.2-16-16c0-44.2 35.8-80 80-80zm-32-96a64 64 0 1 1 128 0 64 64 0 1 1 -128 0zM144 64h96c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16s7.2-16 16-16z" />
            </svg>
          </div>
          <div className="mt-1 text-center text-xs text-blue">Id Digital</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              fill="currentColor"
              className="h-8 w-8 text-white"
            >
              <path d="M168 80c-13.3 0-24 10.7-24 24V408c0 8.4-1.4 16.5-4.1 24H440c13.3 0 24-10.7 24-24V104c0-13.3-10.7-24-24-24H168zM72 480c-39.8 0-72-32.2-72-72V112C0 98.7 10.7 88 24 88s24 10.7 24 24V408c0 13.3 10.7 24 24 24s24-10.7 24-24V104c0-39.8 32.2-72 72-72H440c39.8 0 72 32.2 72 72V408c0 39.8-32.2 72-72 72H72zM176 136c0-13.3 10.7-24 24-24h96c13.3 0 24 10.7 24 24v80c0 13.3-10.7 24-24 24H200c-13.3 0-24-10.7-24-24V136zm200-24h32c13.3 0 24 10.7 24 24s-10.7 24-24 24H376c-13.3 0-24-10.7-24-24s10.7-24 24-24zm0 80h32c13.3 0 24 10.7 24 24s-10.7 24-24 24H376c-13.3 0-24-10.7-24-24s10.7-24 24-24zM200 272H408c13.3 0 24 10.7 24 24s-10.7 24-24 24H200c-13.3 0-24-10.7-24-24s10.7-24 24-24zm0 80H408c13.3 0 24 10.7 24 24s-10.7 24-24 24H200c-13.3 0-24-10.7-24-24s10.7-24 24-24z" />
            </svg>
          </div>
          <div className="mt-1 text-center text-xs text-blue">Comunica</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 512"
              fill="currentColor"
              className="h-8 w-8 text-white"
            >
              <path d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM609.3 512H471.4c5.4-9.4 8.6-20.3 8.6-32v-8c0-60.7-27.1-115.2-69.8-151.8c2.4-.1 4.7-.2 7.1-.2h61.4C567.8 320 640 392.2 640 481.3c0 17-13.8 30.7-30.7 30.7zM432 256c-31 0-59-12.6-79.3-32.9C372.4 196.5 384 163.6 384 128c0-26.8-6.6-52.1-18.3-74.3C384.3 40.1 407.2 32 432 32c61.9 0 112 50.1 112 112s-50.1 112-112 112z" />
            </svg>
          </div>
          <div className="mt-1 text-center text-xs text-blue">Eventos</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              fill="currentColor"
              className="h-8 w-8 text-white"
            >
              <path d="M416 0C400 0 288 32 288 176V288c0 35.3 28.7 64 64 64h32V480c0 17.7 14.3 32 32 32s32-14.3 32-32V352 240 32c0-17.7-14.3-32-32-32zM64 16C64 7.8 57.9 1 49.7 .1S34.2 4.6 32.4 12.5L2.1 148.8C.7 155.1 0 161.5 0 167.9c0 45.9 35.1 83.6 80 87.7V480c0 17.7 14.3 32 32 32s32-14.3 32-32V255.6c44.9-4.1 80-41.8 80-87.7c0-6.4-.7-12.8-2.1-19.1L191.6 12.5c-1.8-8-9.3-13.3-17.4-12.4S160 7.8 160 16V150.2c0 5.4-4.4 9.8-9.8 9.8c-5.1 0-9.3-3.9-9.8-9L127.9 14.6C127.2 6.3 120.3 0 112 0s-15.2 6.3-15.9 14.6L83.7 151c-.5 5.1-4.7 9-9.8 9c-5.4 0-9.8-4.4-9.8-9.8V16zm48.3 152l-.3 0-.3 0 .3-.7 .3 .7z" />
            </svg>
          </div>
          <div className="mt-1 text-center text-xs text-blue">Restaurantes</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              fill="currentColor"
              className="h-8 w-8 text-white"
            >
              <path d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192H400V448c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192z" />
            </svg>
          </div>
          <div className="mt-1 text-center text-xs text-blue">
            Calendário Acadêmico
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
              fill="currentColor"
              className="h-8 w-8 text-white"
            >
              <path d="M288 0C422.4 0 512 35.2 512 80V96l0 32c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32l0 160c0 17.7-14.3 32-32 32v32c0 17.7-14.3 32-32 32H416c-17.7 0-32-14.3-32-32V448H192v32c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32l0-32c-17.7 0-32-14.3-32-32l0-160c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h0V96h0V80C64 35.2 153.6 0 288 0zM128 160v96c0 17.7 14.3 32 32 32H272V128H160c-17.7 0-32 14.3-32 32zM304 288H416c17.7 0 32-14.3 32-32V160c0-17.7-14.3-32-32-32H304V288zM144 400a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm288 0a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM384 80c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16s7.2 16 16 16H368c8.8 0 16-7.2 16-16z" />
            </svg>
          </div>
          <div className="mt-1 text-center text-xs text-blue">Intercampi</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
              fill="currentColor"
              className="h-8 w-8 text-white"
            >
              <path d="M384 476.1L192 421.2V35.9L384 90.8V476.1zm32-1.2V88.4L543.1 37.5c15.8-6.3 32.9 5.3 32.9 22.3V394.6c0 9.8-6 18.6-15.1 22.3L416 474.8zM15.1 95.1L160 37.2V423.6L32.9 474.5C17.1 480.8 0 469.2 0 452.2V117.4c0-9.8 6-18.6 15.1-22.3z" />
            </svg>
          </div>
          <div className="mt-1 text-center text-xs text-blue">Mapas</div>
        </div>
      </div>

      <div className="mt-4 bg-white p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              fill="currentColor"
              className="h-5 w-5 text-blue"
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
            className="h-5 w-5 text-blue"
          >
            <path d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z" />
          </svg>
        </div>

        <div className="mt-5">
          <div className="w-16 rounded-tl rounded-tr bg-gray2 px-3 py-0.5 text-xs text-white">
            Almoço
          </div>
          <div className="w-full rounded-r rounded-bl bg-blue px-3 py-1 text-white">
            Hoje não será servido almoço
          </div>
        </div>

        <div className="mt-3">
          <div className="w-16 rounded-tl rounded-tr bg-gray2 px-3 py-0.5 text-xs text-white">
            Jantar
          </div>
          <div className="w-full rounded-r rounded-bl bg-blue px-3 py-1 text-white">
            Hoje não será servido jantar
          </div>
        </div>

        <div className="mt-4 flex items-center justify-end gap-1 text-xs">
          <div>Ver cardápio completo</div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            fill="currentColor"
            className="h-4 w-4"
          >
            <path d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM294.6 135.1l99.9 107.1c3.5 3.8 5.5 8.7 5.5 13.8s-2 10.1-5.5 13.8L294.6 376.9c-4.2 4.5-10.1 7.1-16.3 7.1C266 384 256 374 256 361.7l0-57.7-96 0c-17.7 0-32-14.3-32-32l0-32c0-17.7 14.3-32 32-32l96 0 0-57.7c0-12.3 10-22.3 22.3-22.3c6.2 0 12.1 2.6 16.3 7.1z" />
          </svg>
        </div>
      </div>

      <div className="mt-4 bg-white p-4">
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
            fill="currentColor"
            className="h-5 w-5 text-blue"
          >
            <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
          </svg>

          <div className="ml-2 text-xl font-bold text-blue">
            Eventos em andamento
          </div>
        </div>

        <div className="mt-4 flex items-start gap-4 overflow-x-scroll bg-white">
          <div className="flex h-[150px] min-w-[250px] flex-col justify-end overflow-hidden rounded border border-gray6 bg-event-1 bg-no-repeat">
            <div className="flex flex-col items-center justify-center gap-1 bg-white py-1 text-center text-blue">
              <div className="text-sm leading-tight tracking-normal">
                NOVA DATA - 2º semestre de 2024 - Olimpíadas de Simulação do
                HC-UFU/Ebserh
              </div>
              <div className="text-xs">
                26/01/2025 - 07:30 até 26/01/2025 - 19:00
              </div>
            </div>
          </div>

          <div className="flex h-[150px] min-w-[250px] flex-col justify-end overflow-hidden rounded border border-gray6 bg-event-2 bg-no-repeat">
            <div className="flex flex-col items-center justify-center gap-1 bg-white py-1 text-center text-blue">
              <div className="text-sm leading-tight tracking-normal">
                Feira ArtCult Bibliotecas UFU
              </div>
              <div className="text-xs">26/01/2025 - 08:00</div>
            </div>
          </div>

          <div className="flex h-[150px] min-w-[250px] flex-col justify-end overflow-hidden rounded border border-gray6 bg-event-3 bg-no-repeat">
            <div className="flex flex-col items-center justify-center gap-1 bg-white py-1 text-center text-blue">
              <div className="text-sm leading-tight tracking-normal">
                Oficinas de Tai Chi Chuan e Chi Kung
              </div>
              <div className="text-xs">
                25/01/2025 - 17:00 até 30/01/2025 - 19:00
              </div>
            </div>
          </div>

          <div className="flex h-[150px] min-w-[250px] flex-col justify-end overflow-hidden rounded border border-gray6 bg-event-4 bg-no-repeat">
            <div className="flex flex-col items-center justify-center gap-1 bg-white py-1 text-center text-blue">
              <div className="text-sm leading-tight tracking-normal">
                I Webinar Internacional sobre Temas Contemporâneos em Ciência
              </div>
              <div className="text-xs">15/03/2025 - 14:00 até 30/03/2025</div>
            </div>
          </div>

          <div className="flex h-[150px] min-w-[250px] flex-col justify-end overflow-hidden rounded border border-gray6 bg-event-5 bg-no-repeat">
            <div className="flex flex-col items-center justify-center gap-1 bg-white py-1 text-center text-blue">
              <div className="text-sm leading-tight tracking-normal">
                Curso de Extensão de Língua Inglesa - Turma 3
              </div>
              <div className="text-xs">22/03/2025 - 00:00 até 28/03/2025</div>
            </div>
          </div>
        </div>
      </div>
    </main>

    <footer className="fixed bottom-0 flex h-10 w-full items-center justify-between bg-gray3 px-1 text-blue">
      <div className="flex w-2/3 items-center gap-2 text-[10px] font-bold">
        <Image src="/ctic-logo.svg" alt="Logo CTIC" width={38} height={20} />
        <div className="flex flex-col">
          <div>CTIC - Centro de Tecnologia</div>
          <div>da Informação e Comunicação</div>
        </div>
      </div>
      <div className="z-10 flex w-1/3 items-center justify-end gap-1 pt-3 text-[10px] font-bold">
        <div>Fale Conosco</div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          fill="currentColor"
          className="h-3 w-3"
        >
          <path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z" />
        </svg>
      </div>
    </footer>
  </div>
);

const digitalIdPage = (setDigitalId: (digitalId: boolean) => void) => (
  <>
    <header className="fixed top-0 z-10 flex h-10 w-full items-center justify-between bg-blue px-2 text-white">
      <div className="flex gap-1" onClick={() => setDigitalId(false)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 320 512"
          fill="currentColor"
          className="h-6 w-6"
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
          className="h-6 w-6"
        >
          <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
        </svg>
      </div>
    </header>

    <main className="flex min-h-screen flex-col bg-ufu bg-[length:30px_30px] pt-10">
      <div className="h-20 bg-ufu-header bg-contain bg-center bg-no-repeat bg-origin-content px-5 pb-6 pt-4"></div>

      <div className="h-[100px] border-b-4 border-t-4 border-blue bg-white">
        <div className="absolute ml-[10px] mt-[-17px] h-[130px] w-[130px] rounded-full border-4 border-blue bg-profile-pic-ju bg-cover bg-center"></div>
        <div className="flex h-full flex-col items-center justify-center pl-[150px] pr-[10px] text-center">
          <div className="font-bold leading-none tracking-normal">
            JULIANA OLIVEIRA UGIETTI
          </div>
          <div className="mt-1 text-sm leading-none">
            GRADUAÇÃO EM ARQUITETURA: BACHARELADO - INTEGRAL
          </div>
        </div>
      </div>

      <div className="mt-5 flex-grow px-5 py-8">
        <div className="mx-auto h-full w-[90%] overflow-hidden overflow-y-scroll rounded-[10px] bg-white py-[1px] shadow-[0_0_3px_#3751b8]">
          <div className="border-b border-gray5 bg-gray3 px-4 py-1 font-bold text-gray4">
            Matrícula:
          </div>
          <div className="border-b border-gray5 px-4 py-1 font-medium">
            12121ARQ014
          </div>
          <div className="border-b border-gray5 bg-gray3 px-4 py-1 font-bold text-gray4">
            CPF:
          </div>
          <div className="border-b border-gray5 px-4 py-1 font-medium">
            058.747.991-41
          </div>
          <div className="border-b border-gray5 bg-gray3 px-4 py-1 font-bold text-gray4">
            R.G / Org. Exp.:
          </div>
          <div className="border-b border-gray5 px-4 py-1 font-medium">
            GO6212593 - SSP/GO
          </div>
          <div className="border-b border-gray5 bg-gray3 px-4 py-1 font-bold text-gray4">
            Naturalidade:
          </div>
          <div className="border-b border-gray5 px-4 py-1 font-medium">
            Goiânia
          </div>
          <div className="border-b border-gray5 bg-gray3 px-4 py-1 font-bold text-gray4">
            Filiação:
          </div>
          <div className="border-b border-gray5 px-4 py-1 font-medium">
            <div>Julio Cesar de Oliveira</div>
            <div>Luciana Ugietti de Assis Oliveira</div>
          </div>
          <div className="border-b border-gray5 bg-gray3 px-4 py-1 font-bold text-gray4">
            Data de nascimento:
          </div>
          <div className="border-b border-gray5 px-4 py-1 font-medium">
            04/07/2000
          </div>
          <div className="border-b border-gray5 bg-gray3 px-4 py-1 font-bold text-gray4">
            Data de Validade:
          </div>
          <div className="border-b border-gray5 px-4 py-1 font-medium">
            30/12/2025
          </div>
        </div>
      </div>
    </main>
  </>
);

export default function Home() {
  const [digitalId, setDigitalId] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentSlide === 3) {
        setCurrentSlide(1);
      } else {
        setCurrentSlide(currentSlide + 1);
      }
    }, 9000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  return digitalId
    ? digitalIdPage(setDigitalId)
    : homePage(setDigitalId, currentSlide, setCurrentSlide);
}
