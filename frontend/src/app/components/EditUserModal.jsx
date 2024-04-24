"use client";

import { Button, Modal,Select  } from "flowbite-react";
import { useState } from "react";

export default function EditUserModal({props}) {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Button className="editBtnn" onClick={() => setOpenModal(true)}><img src="/blue-edit.png"/>Change Profile Information</Button>
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Change Profile Information</Modal.Header>
        <Modal.Body>
            <form className="editProfileee" action="">
                <div className="line flex flex-col">
                    <label htmlFor="" className="text-[14px] font-[600] mb-[10px]">First name:</label>
                    <input type="text" name="first_name" className="rounded-[7px] text-[0.8rem] border border-[#e4e4e7]"/>
                </div>
                <div className="line flex flex-col mt-[15px]">
                    <label htmlFor="" className="text-[14px] font-[600] mb-[10px]">Last name:</label>
                    <input type="text" name="last_name" className="rounded-[7px] text-[0.8rem] border border-[#e4e4e7]"/>
                </div>
                <div className="line flex flex-col mt-[15px]">
                    <label htmlFor="" className="text-[14px] font-[600] mb-[10px]">Address:</label>
                    <input type="text" name="address" className="rounded-[7px] text-[0.8rem] border border-[#e4e4e7]"/>
                </div>
                <div className="line flex flex-col mt-[15px]">
                    <label htmlFor="" className="text-[14px] font-[600] mb-[10px]">Phone number:</label>
                    <input type="text" name="phone_number" className="rounded-[7px] text-[0.8rem] border border-[#e4e4e7]"/>
                </div>
                <div className="line flex flex-col mt-[15px]">
                    <label htmlFor="" className="text-[14px] font-[600] mb-[10px]">Email:</label>
                    <input type="text" name="email" className="rounded-[7px] text-[0.8rem] border border-[#e4e4e7]"/>
                </div>
                <div className="line flex flex-col mt-[15px]">
                    <label htmlFor="" className="text-[14px] font-[600] mb-[10px]">Wilaya:</label>
                    {/* <input type="text" name="wilaya" className="rounded-[7px] text-[0.8rem] border border-[#e4e4e7]"/> */}
                    <Select id="wilaya">
                    <option>-01- Adrar</option>
                    <option>-02- Chlef</option>
                    <option>-03- Laghouat</option>
                    <option>-04- Oum El Bouaghi</option>
                    <option>-05- Batna</option>
                    <option>-06- Bejaia</option>
                    <option>-07- Biskra</option>
                    <option>-08- Bechar</option>
                    <option>-09- Blida</option>
                    <option>-10- Bouira</option>
                    <option>-11- Tamanrasset</option>
                    <option>-12- Tebessa</option>
                    <option>-13- Tlemcen</option>
                    <option>-14- Tiaret</option>
                    <option>-15- Tizi Ouzou</option>
                    <option>-16- Alger</option>
                    <option>-17- Djelfa</option>
                    <option>-18- Jijel</option>
                    <option>-19- Setif</option>
                    <option>-20- Saida</option>
                    <option>-21- Skikda</option>
                    <option>-22- Sidi Bel Abbes</option>
                    <option>-23- Annaba</option>
                    <option>-24- Guelma</option>
                    <option>-25- Constantine</option>
                    <option>-26- Medea</option>
                    <option>-27- Mostaganem</option>
                    <option>-28- MSila</option>
                    <option>-29- Mascara</option>
                    <option>-30- Ouargla</option>
                    <option>-31- Oran</option>
                    <option>-32- El Bayadh</option>
                    <option>-33- Illizi</option>
                    <option>-34- Bordj Bou Arreridj</option>
                    <option>-35- Boumerdes</option>
                    <option>-36- El Tarf</option>
                    <option>-37- Tindouf</option>
                    <option>-38- Tissemsilt</option>
                    <option>-39- El Oued</option>
                    <option>-40- Khenchela</option>
                    <option>-41- Souk Ahras</option>
                    <option>-42- Tipaza</option>
                    <option>-43- Mila</option>
                    <option>-44- Ain Defla</option>
                    <option>-45- Naama</option>
                    <option>-46- Ain Temouchent</option>
                    <option>-47- Ghardaia</option>
                    <option>-48- Relizane</option>
                    <option>-49- Timimoun</option>
                    <option>-50- Bordj Badji Mokhtar</option>
                    <option>-51- Ouled Djellal</option>
                    <option>-52- Béni Abbes</option>
                    <option>-53- In Salah</option>
                    <option>-54- In Guezzam</option>
                    <option>-55- Touggourt</option>
                    <option>-56- Djanet</option>
                    <option>-57- El MGhair</option>
                    <option>-58- El Meniaa</option>
                    </Select>
                </div>
            </form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setOpenModal(false)} style={{backgroundColor:"#ff9200"}}>I accept</Button>
          <Button color="gray" className="enabled:hover:text-[black]" onClick={() => setOpenModal(false)}>
            Decline
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}