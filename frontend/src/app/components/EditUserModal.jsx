"use client";

import { Button, Modal,Select  } from "flowbite-react";
import { useState } from "react";
import { editProfile } from "../actions/editProfile";

export default function EditUserModal(props) {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Button className="editBtnn" onClick={() => setOpenModal(true)}><img src="/blue-edit.png"/>Change Profile Information</Button>
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Change Profile Information</Modal.Header>
        <Modal.Body>
            <form id="my-form" className="editProfileee" action={async(formData)=>{
              await editProfile(formData);
              setOpenModal(false)
            }}>
                <div className="line flex flex-col">
                    <label htmlFor="" className="text-[14px] font-[600] mb-[10px]">First name:</label>
                    <input type="text" defaultValue={props.firstName} name="first_name" className="rounded-[7px] text-[0.8rem] border border-[#e4e4e7]"/>
                </div>
                <div className="line flex flex-col mt-[15px]">
                    <label htmlFor="" className="text-[14px] font-[600] mb-[10px]">Last name:</label>
                    <input type="text" defaultValue={props.lastName} name="last_name" className="rounded-[7px] text-[0.8rem] border border-[#e4e4e7]"/>
                </div>
                <div className="line flex flex-col mt-[15px]">
                    <label htmlFor="" className="text-[14px] font-[600] mb-[10px]">Address:</label>
                    <input type="text" defaultValue={props.address} name="address" className="rounded-[7px] text-[0.8rem] border border-[#e4e4e7]"/>
                </div>
                <div className="line flex flex-col mt-[15px]">
                    <label htmlFor="" className="text-[14px] font-[600] mb-[10px]">Phone number:</label>
                    <input type="text" defaultValue={props.phone} name="phone_number" className="rounded-[7px] text-[0.8rem] border border-[#e4e4e7]"/>
                </div>
                <div className="line flex flex-col mt-[15px]">
                    <label htmlFor="" className="text-[14px] font-[600] mb-[10px]">Email:</label>
                    <input type="text" defaultValue={props.email} name="email" className="rounded-[7px] text-[0.8rem] border border-[#e4e4e7]"/>
                </div>
                <div className="line flex flex-col mt-[15px]">
                    <label htmlFor="" className="text-[14px] font-[600] mb-[10px]">Wilaya:</label>
                    {/* <input type="text" name="wilaya" className="rounded-[7px] text-[0.8rem] border border-[#e4e4e7]"/> */}
                    <Select name="wilaya" id="wilaya">
                    <option selected={props.wilaya === "01" ? "selected" : false} value="1">-01- Adrar</option>
                      <option selected={props.wilaya === "02" ? "selected" : false} value="2">-02- Chlef</option>
                      <option selected={props.wilaya === "03" ? "selected" : false} value="3">-03- Laghouat</option>
                      <option selected={props.wilaya === "04" ? "selected" : false} value="4">-04- Oum El Bouaghi</option>
                      <option selected={props.wilaya === "05" ? "selected" : false} value="5">-05- Batna</option>
                      <option selected={props.wilaya === "06" ? "selected" : false} value="6">-06- Bejaia</option>
                      <option selected={props.wilaya === "07" ? "selected" : false} value="7">-07- Biskra</option>
                      <option selected={props.wilaya === "08" ? "selected" : false} value="8">-08- Bechar</option>
                      <option selected={props.wilaya === "09" ? "selected" : false} value="9">-09- Blida</option>
                      <option selected={props.wilaya === "10" ? "selected" : false} value="10">-10- Bouira</option>
                      <option selected={props.wilaya === "11" ? "selected" : false} value="11">-11- Tamanrasset</option>
                      <option selected={props.wilaya === "12" ? "selected" : false} value="12">-12- Tebessa</option>
                      <option selected={props.wilaya === "13" ? "selected" : false} value="13">-13- Tlemcen</option>
                      <option selected={props.wilaya === "14" ? "selected" : false} value="14">-14- Tiaret</option>
                      <option selected={props.wilaya === "15" ? "selected" : false} value="15">-15- Tizi Ouzou</option>
                      <option selected={props.wilaya === "16" ? "selected" : false} value="16">-16- Alger</option>
                      <option selected={props.wilaya === "17" ? "selected" : false} value="17">-17- Djelfa</option>
                      <option selected={props.wilaya === "18" ? "selected" : false} value="18">-18- Jijel</option>
                      <option selected={props.wilaya === "19" ? "selected" : false} value="19">-19- Setif</option>
                      <option selected={props.wilaya === "20" ? "selected" : false} value="20">-20- Saida</option>
                      <option selected={props.wilaya === "21" ? "selected" : false} value="21">-21- Skikda</option>
                      <option selected={props.wilaya === "22" ? "selected" : false} value="22">-22- Sidi Bel Abbes</option>
                      <option selected={props.wilaya === "23" ? "selected" : false} value="23">-23- Annaba</option>
                      <option selected={props.wilaya === "24" ? "selected" : false} value="24">-24- Guelma</option>
                      <option selected={props.wilaya === "25" ? "selected" : false} value="25">-25- Constantine</option>
                      <option selected={props.wilaya === "26" ? "selected" : false} value="26">-26- Medea</option>
                      <option selected={props.wilaya === "27" ? "selected" : false} value="27">-27- Mostaganem</option>
                      <option selected={props.wilaya === "28" ? "selected" : false} value="28">-28- MSila</option>
                      <option selected={props.wilaya === "29" ? "selected" : false} value="29">-29- Mascara</option>
                      <option selected={props.wilaya === "30" ? "selected" : false} value="30">-30- Ouargla</option>
                      <option selected={props.wilaya === "31" ? "selected" : false} value="31">-31- Oran</option>
                      <option selected={props.wilaya === "32" ? "selected" : false} value="32">-32- El Bayadh</option>
                      <option selected={props.wilaya === "33" ? "selected" : false} value="33">-33- Illizi</option>
                      <option selected={props.wilaya === "34" ? "selected" : false} value="34">-34- Bordj Bou Arreridj</option>
                      <option selected={props.wilaya === "35" ? "selected" : false} value="35">-35- Boumerdes</option>
                      <option selected={props.wilaya === "36" ? "selected" : false} value="36">-36- El Tarf</option>
                      <option selected={props.wilaya === "37" ? "selected" : false} value="37">-37- Tindouf</option>
                      <option selected={props.wilaya === "38" ? "selected" : false} value="38">-38- Tissemsilt</option>
                      <option selected={props.wilaya === "39" ? "selected" : false} value="39">-39- El Oued</option>
                      <option selected={props.wilaya === "40" ? "selected" : false} value="40">-40- Khenchela</option>
                      <option selected={props.wilaya === "41" ? "selected" : false} value="41">-41- Souk Ahras</option>
                      <option selected={props.wilaya === "42" ? "selected" : false} value="42">-42- Tipaza</option>
                      <option selected={props.wilaya === "43" ? "selected" : false} value="43">-43- Mila</option>
                      <option selected={props.wilaya === "44" ? "selected" : false} value="44">-44- Ain Defla</option>
                      <option selected={props.wilaya === "45" ? "selected" : false} value="45">-45- Naama</option>
                      <option selected={props.wilaya === "46" ? "selected" : false} value="46">-46- Ain Temouchent</option>
                      <option selected={props.wilaya === "47" ? "selected" : false} value="47">-47- Ghardaia</option>
                      <option selected={props.wilaya === "48" ? "selected" : false} value="48">-48- Relizane</option>
                      <option selected={props.wilaya === "49" ? "selected" : false} value="49">-49- Timimoun</option>
                      <option selected={props.wilaya === "50" ? "selected" : false} value="50">-50- Bordj Badji Mokhtar</option>
                      <option selected={props.wilaya === "51" ? "selected" : false} value="51">-51- Ouled Djellal</option>
                      <option selected={props.wilaya === "52" ? "selected" : false} value="52">-52- Beni Abbes</option>
                      <option selected={props.wilaya === "53" ? "selected" : false} value="53">-53- In Salah</option>
                      <option selected={props.wilaya === "54" ? "selected" : false} value="54">-54- In Guezzam</option>
                      <option selected={props.wilaya === "55" ? "selected" : false} value="55">-55- Touggourt</option>
                      <option selected={props.wilaya === "56" ? "selected" : false} value="56">-56- Djanet</option>
                      <option selected={props.wilaya === "57" ? "selected" : false} value="57">-57- El MGhair</option>
                      <option selected={props.wilaya === "58" ? "selected" : false} value="58">-58- El Meniaa</option>
                    </Select>
                </div>
                <input type="hidden" name="userId" value={props.userId} />
                <input type="hidden" name="password" value={props.pass} />
            </form>
        </Modal.Body>
        <Modal.Footer>
          <Button form="my-form" type="submit" className="w-[80px]" style={{backgroundColor:"#ff9200"}}>Edit</Button>
          <Button color="gray" className="enabled:hover:text-[black] w-[80px]" onClick={() => setOpenModal(false)}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}