import { Link } from "./Link";
import "./navigator.css";

type Item = {
  label: string;
  link?: string;
};

type Menu = {
  item: Item;
  subItems?: Item[];
};

interface NavigatorProps {
  menu: Menu[];
  // user?: User;
  // onLogin: () => void;
  // onLogout: () => void;
  // onCreateAccount: () => void;
}

const submenu = (item: Item, subItems: Item[]) => {
  return (
    <>
      <li className="menu-header">
        <a href={item?.link || "#"}>{item.label}</a>
      </li>
      {subItems.map((item) => (
        <li className="menu-subitem">
          <a href={item.link}>{item.label}</a>
        </li>
      ))}
    </>
  );
};

export const Navigator = ({ menu }: NavigatorProps) => (
  <header>
    <div className="navigator">
      <ul className="menu">
        {menu.map((menuItem) =>
          menuItem.subItems ? (
            submenu(menuItem.item, menuItem.subItems)
          ) : (
            <Link
              label={menuItem.item.label}
              link={menuItem.item?.link || ""}
              hover={true}
            />
          )
        )}
      </ul>
    </div>
  </header>
);
