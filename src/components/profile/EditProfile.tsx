"use client";
import type { ChangeEventHandler } from "react";
import { useState } from "react";
import { updatePersona } from "app/services/persona";
import _ from 'lodash';

interface EditProfileProps {
    personaDatos: PersonaProfile
    tiposDocumentoIdentidad: TipoDocumentoIdentidadSelect[]
}

export const EditProfile = ({ personaDatos, tiposDocumentoIdentidad }: EditProfileProps) => { 
    const diaHoy = new Date().toISOString().split('T')[0];
    const [editProfileForm, setEditProfileForm] = useState({
        ...personaDatos
    })
    const [fechaNacimiento, setFechaNacimiento] = useState(
        personaDatos.Per_FechaNacimiento ? 
        new Date(personaDatos.Per_FechaNacimiento).toISOString().split('T')[0] : 
        undefined
    )    
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
        event.preventDefault();
        await updatePersona(
          editProfileForm.Per_IdPersona,
          { ..._.omit(editProfileForm, ['Per_IdPersona', 'tipoDocumentoIdentidad', '__typename']) }
        );
    };

    const onChange: ChangeEventHandler<HTMLInputElement | HTMLSelectElement> = (event): void => {
        if (event.target.name === "Per_FechaNacimiento") {
            setFechaNacimiento(event.target.value)
        }
        setEditProfileForm({
            ...editProfileForm,           
            [event.target.name]: event.target.value            
        })
    };

    return (    
        <form        
            onSubmit={handleSubmit}
        >
            <div className="space-y-12">    
                <div className="border-b border-gray-900/10 pb-12">
                    <h2 className="text-base font-semibold leading-7 text-gray-900">Personal Information</h2>
                    <p className="mt-1 text-sm leading-6 text-gray-600">Use a permanent address where you can receive mail.</p>
                    <input type="hidden" name="idPersona" value={personaDatos.Per_IdPersona}  />
                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-2">
                            <label htmlFor="Per_Nombres" className="block text-sm font-medium leading-6 text-gray-900">
                            Nombres
                            </label>
                            <div className="mt-2">
                            <input
                                type="text"
                                name="Per_Nombres"
                                id="Per_Nombres"
                                value={editProfileForm.Per_Nombres}
                                onChange={onChange}
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2"
                            />
                            </div>
                        </div>            
                        <div className="sm:col-span-2">
                            <label htmlFor="Per_ApellidoPaterno" className="block text-sm font-medium leading-6 text-gray-900">
                            Apellido Paterno
                            </label>
                            <div className="mt-2">
                            <input
                                type="text"
                                name="Per_ApellidoPaterno"
                                id="Per_ApellidoPaterno"
                                value={editProfileForm.Per_ApellidoPaterno}
                                onChange={onChange}
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2"
                            />
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="Per_ApellidoMaterno" className="block text-sm font-medium leading-6 text-gray-900">
                            Apellido Materno
                            </label>
                            <div className="mt-2">
                            <input
                                type="text"
                                name="Per_ApellidoMaterno"
                                id="Per_ApellidoMaterno"
                                value={editProfileForm.Per_ApellidoMaterno}
                                onChange={onChange}
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2"
                            />
                            </div>
                        </div>
        
                        <div className="sm:col-span-2">
                            <label htmlFor="Tdi_IdTipoDocumentoIdentidad" className="block text-sm font-medium leading-6 text-gray-900">
                            Documento de Identidad
                            </label>
                            <div className="mt-2">
                            <select
                                id="Tdi_IdTipoDocumentoIdentidad"
                                name="Tdi_IdTipoDocumentoIdentidad"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2"
                                value={editProfileForm.Tdi_IdTipoDocumentoIdentidad}                     
                                onChange={onChange}
                            >
                                {
                                    tiposDocumentoIdentidad.map((tdi) => (
                                        <option 
                                            key={tdi.Tdi_IdTipoDocumentoIdentidad} 
                                            value={tdi.Tdi_IdTipoDocumentoIdentidad}
                                        >
                                            {tdi.Tdi_NombreCorto}                                            
                                        </option>
                                    ))
                                }
                            </select>
                            </div>
                        </div>                        
                        <div className="sm:col-span-2">
                            <label htmlFor="Per_NumeroDocumentoIdentidad" className="block text-sm font-medium leading-6 text-gray-900">
                            N° Documento
                            </label>
                            <div className="mt-2">
                            <input
                                type="text"
                                name="Per_NumeroDocumentoIdentidad"
                                id="Per_NumeroDocumentoIdentidad"
                                value={editProfileForm.Per_NumeroDocumentoIdentidad}
                                onChange={onChange}
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2"
                            />
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="Per_CorreoElectronico" className="block text-sm font-medium leading-6 text-gray-900">
                            Correo Electrónico
                            </label>
                            <div className="mt-2">
                            <input
                                id="Per_CorreoElectronico"
                                name="Per_CorreoElectronico"
                                type="email"
                                value={editProfileForm.Per_CorreoElectronico}                                
                                onChange={onChange}
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2"
                            />
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="Per_Celular" className="block text-sm font-medium leading-6 text-gray-900">
                            Celular
                            </label>
                            <div className="mt-2">
                            <input
                                id="Per_Celular"
                                name="Per_Celular"
                                value={editProfileForm.Per_Celular}                                
                                onChange={onChange}
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2"
                            />
                            </div>
                        </div>
                                                 
                        <div className="sm:col-span-2">
                            <label htmlFor="Per_FechaNacimiento" className="block text-sm font-medium leading-6 text-gray-900">
                            Fecha de Nacimiento
                            </label>
                            <div className="mt-2">
                                <input 
                                    id="Per_FechaNacimiento"
                                    name="Per_FechaNacimiento"
                                    type="date"
                                    max={diaHoy}
                                    value={fechaNacimiento}
                                    onChange={onChange}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2"
                                />
                            </div>
                        </div>
                          
                        <div className="sm:col-span-2">
                            <label htmlFor="Per_Sexo" className="block text-sm font-medium leading-6 text-gray-900">
                            Sexo
                            </label>
                            <div className="mt-2">
                            <select
                                id="Per_Sexo"
                                name="Per_Sexo"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2"
                                value={editProfileForm.Per_Sexo}
                                onChange={onChange}
                            >
                               <option value="M">Masculino</option>
                               <option value="F">Femenino</option>
                            </select>
                            </div>
                        </div>
        
                        <div className="col-span-full">
                            <label htmlFor="Per_Direccion" className="block text-sm font-medium leading-6 text-gray-900">
                            Dirección
                            </label>
                            <div className="mt-2">
                            <input
                                type="text"
                                name="Per_Direccion"
                                id="Per_Direccion"
                                value={editProfileForm.Per_Direccion}
                                onChange={onChange}
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2"
                            />
                            </div>
                        </div>    
                    </div>
                </div>
            </div>    
            <div className="mt-6 flex items-center justify-end gap-x-6">
                <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
                    Cancel
                </button>
                <button
                    type="submit"
                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Save
                </button>
            </div>
        </form>
    )
}