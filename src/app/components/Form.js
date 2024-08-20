import Button from "./Button";

export default function Form() {
  return (
    <form className="md:col-span-2">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        <div className="col-span-full sm:col-span-2 md:col-span-2">
          <label className="font-roboto block text-sm font-semibold leading-6 text-white">
            Cidade
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="cidade"
              id="cidade"
              required
              className="block w-full rounded-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3"
            />
          </div>
        </div>
        <div className="col-span-full sm:col-span-1 md:col-span-1">
          <label className="font-roboto block text-sm font-semibold leading-6 text-white">
            Quantos povoados?
          </label>
          <div className="mt-2">
            <input
              required
              type="number"
              name="povoados"
              id="povoados"
              className="block w-full rounded-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3"
            />
          </div>
        </div>
        <div className="col-span-full sm:col-span-1 md:col-span-1">
          <label className="font-roboto block text-sm font-semibold leading-6 text-white">
            Quantos eleitores?
          </label>
          <div className="mt-2">
            <input
              required
              type="number"
              name="eleitores"
              id="eleitores"
              className="block w-full rounded-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3"
            />
          </div>
        </div>
        <div className="col-span-full sm:col-span-2 md:col-span-2">
          <label className="font-roboto block text-sm font-semibold leading-6 text-white">
            Quantas perguntas?
          </label>
          <div className="mt-2">
            <input
              required
              type="number"
              name="perguntas"
              id="perguntas"
              className="block w-full rounded-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col space-y-6 md:flex-row md:justify-between md:space-y-0 mt-6">
        <fieldset className="w-full ">
          <legend className="text-sm font-semibold leading-6 text-white">
            Tipo da pesquisa
          </legend>
          <div className="mt-3 mb-3 flex flex-wrap gap-x-4">
            <div className="flex items-center gap-x-3">
              <input
                id="push-quantitativa"
                name="push-tipo"
                type="radio"
                required
                className="h-4 w-4 border-white text-indigo-600 focus:ring-indigo-600 appearance-none square-radio rounded-sm"
              />
              <label className="block text-sm leading-6 text-white">
                Quantitativa
              </label>
            </div>
            <div className="flex items-center gap-x-3">
              <input
                id="push-qualitativa"
                name="push-tipo"
                type="radio"
                required
                className="h-4 w-4 border-white text-indigo-600 focus:ring-indigo-600 appearance-none square-radio rounded-sm"
              />
              <label className="block text-sm leading-6 text-white">
                Qualitativa
              </label>
            </div>
            <div className="flex items-center gap-x-3">
              <input
                id="push-quali-quantitativa"
                name="push-tipo"
                type="radio"
                required
                className="h-4 w-4 border-white text-indigo-600 focus:ring-indigo-600 appearance-none square-radio rounded-sm"
              />
              <label className="block text-sm leading-6 text-white">
                Quali Quantitativa
              </label>
            </div>
            <div className="flex items-center gap-x-3">
              <input
                id="push-tracking"
                name="push-tipo"
                type="radio"
                required
                className="h-4 w-4 border-white text-indigo-600 focus:ring-indigo-600 appearance-none square-radio rounded-sm"
              />
              <label className="block text-sm leading-6 text-white">
                Tracking
              </label>
            </div>
          </div>
        </fieldset>

        <fieldset className="w-full md:w-1/2">
          <legend className="text-sm font-semibold leading-6 text-white">
            Finalidade da pesquisa
          </legend>
          <div className="mt-3 mb-6 flex flex-wrap gap-x-4">
            <div className="flex items-center gap-x-3">
              <input
                id="push-consumo"
                name="push-finalidade"
                type="radio"
                required
                className="h-4 w-4 border-white text-indigo-600 focus:ring-indigo-600 appearance-none square-radio rounded-sm"
              />
              <label className="block text-sm leading-6 text-white">
                Consumo
              </label>
            </div>
            <div className="flex items-center gap-x-3">
              <input
                id="push-registro"
                name="push-finalidade"
                type="radio"
                required
                className="h-4 w-4 border-white text-indigo-600 focus:ring-indigo-600 appearance-none square-radio rounded-sm"
              />
              <label className="block text-sm leading-6 text-white">
                Registro
              </label>
            </div>
          </div>
        </fieldset>
      </div>

      <fieldset className="grid grid-cols-1 gap-6 mt-6">
        <legend className="text-sm font-semibold leading-6 text-white">
          Objetivo da pesquisa
        </legend>
        <div className="flex flex-wrap gap-x-6">
          <div className="flex items-center gap-x-3">
            <input
              id="push-sucessor"
              name="push-objetivo"
              required
              type="radio"
              className="h-4 w-4 border-white text-indigo-600 focus:ring-indigo-600 appearance-none square-radio rounded-sm"
            />
            <label className="block text-sm leading-6 text-white">
              Fazer sucessor
            </label>
          </div>

          <div className="flex items-center gap-x-3">
            <input
              id="push-reeleicao"
              name="push-objetivo"
              type="radio"
              required
              className="h-4 w-4 border-white text-indigo-600 focus:ring-indigo-600 appearance-none square-radio rounded-sm"
            />
            <label className="block text-sm leading-6 text-white">
              Reeleição
            </label>
          </div>
          <div className="flex items-center gap-x-3">
            <input
              id="push-candidatura"
              name="push-objetivo"
              type="radio"
              required
              className="h-4 w-4 border-white text-indigo-600 focus:ring-indigo-600 appearance-none square-radio rounded-sm"
            />
            <label className="block text-sm leading-6 text-white">
              Primeira Candidatura
            </label>
          </div>
        </div>
      </fieldset>

      <div className="col-span-full pb-8 mt-6">
        <label className="block text-sm font-semibold leading-6 text-white">
          Adicionar pergunta
        </label>
        <div className="mt-2">
          <textarea
            id="about"
            name="about"
            rows="3"
            className="block w-full rounded-md border-0 py-1 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          ></textarea>
        </div>
      </div>
      <Button text="FAÇA SEU ORÇAMENTO" />
    </form>
  );
}
