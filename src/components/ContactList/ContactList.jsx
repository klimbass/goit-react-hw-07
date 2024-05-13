import { useDispatch, useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import getContacts, { selectNameFilter } from "../../redux/selectors";

import css from "./ContactList.module.css";

export default function ContactList() {
  const contactList = useSelector(getContacts);
  const filter = useSelector(selectNameFilter);
  const base = contactList.filter((item) => {
    return item.name.toLowerCase().includes(filter.toLocaleLowerCase());
  });

  return (
    <ul className={css.contactList}>
      {base.map((contact) => {
        return (
          <li key={contact.id}>
            <Contact data={contact} />
          </li>
        );
      })}
    </ul>
  );
}
