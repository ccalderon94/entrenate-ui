import { getPersonaInfoProfile } from "app/services/persona/persona"

export const ProfileInfo = async () => {    
    const personaDatos = await getPersonaInfoProfile("AEFF423E-F36B-1410-834E-00CA0566B671")
    const fecha = personaDatos.Per_FechaNacimiento? new Date(personaDatos.Per_FechaNacimiento).toLocaleDateString() : '';
    return (
    <>
        <div className="px-4 sm:px-0">
            <h3 className="text-base font-semibold leading-7 text-gray-900">Profile Information</h3>
            <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">Personal details and application.</p>
        </div>
        <div className="mt-6 border-t border-gray-100">
            <dl className="divide-y divide-gray-100">
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900">Nombres Completos</dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{`${personaDatos.Per_Nombres} ${personaDatos.Per_ApellidoPaterno.toUpperCase()} ${personaDatos.Per_ApellidoMaterno.toUpperCase()}`}</dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900">Documento Identidad</dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{personaDatos.tipoDocumentoIdentidad.Tdi_NombreCorto} - {personaDatos.Per_NumeroDocumentoIdentidad}</dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900">Sexo</dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{personaDatos.Per_Sexo === 'M'? 'Masculino': 'Femenino'} </dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900">Correo Electronico</dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{personaDatos.Per_CorreoElectronico}</dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900">Celular</dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{personaDatos.Per_Celular}</dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900">Dirección</dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{personaDatos.Per_Direccion}</dd>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900">Fecha Nacimiento</dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{fecha}</dd>
                </div>
                <div className="px-4 py-6 ">                        
                    <div className="mt-6 flex items-center justify-end ">                            
                        <button className="bg-indigo-600 text-white font-semibold rounded-md px-3 py-2">Editar</button>
                    </div>
                </div>
            </dl>
        </div>
    </>
    )
}