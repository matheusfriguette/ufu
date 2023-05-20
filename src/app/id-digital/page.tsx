export default function IdDigital() {
  return (
    <div className="h-screen">
      <header className="flex justify-between px-2 py-4 text-white bg-blue">
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

      <main className="flex h-full flex-col bg-ufu bg-[length:30px_30px]">
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
      </main>
    </div>
  );
}
