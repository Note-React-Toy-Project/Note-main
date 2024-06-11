import { ChangeEvent, useRef } from "react";
import styles from "./Dropdown.module.css";
import { useAtom } from "jotai";
import { sortAtom } from "../../atom";
//import useClickClose from "../../hooks/useClickClose";

const Dropdown = () => {
  const dropdownRef = useRef<HTMLSelectElement>(null);
  //useState 이용해서 선택 구현
  const [sort, setSort] = useAtom(sortAtom);
  const onSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    setSort(() => parseInt(e.target.value));
  };

  return (
    <>
      <select
        ref={dropdownRef}
        onChange={onSelect}
        className={styles.dropdownContainer}
        value={sort}
      >
        <option value={1}>최근 생성 순</option>
        <option value={2}>최근 수정 순</option>
      </select>
    </>
  );
};

export default Dropdown;
