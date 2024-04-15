"use client";

import { Dropdown } from "flowbite-react";
import ModalC from "./ModalC";

export default function ActionsC({tab,theId}) {
  return (
    <Dropdown label="" placement="bottom" dismissOnClick={false} renderTrigger={() => <span className="text-[#5AC9F4] hover:underline cursor-pointer">Edit</span>}>
      <Dropdown.Item>
        <ModalC type={"Edit"} component={"edit"+tab} theeId={theId}/>
      </Dropdown.Item>
      <Dropdown.Item>
        <ModalC type={"Delete"} component={"delete"+tab} theeId={theId}/>
      </Dropdown.Item>
    </Dropdown>
  );
}