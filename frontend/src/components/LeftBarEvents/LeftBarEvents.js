import "./LeftBarEvents.css";
import { Users } from "../../dummyData";
import LeftEvents from "../LeftEvents/LeftEvents"
export default function LeftBar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarFriendList">
          {Users.map((u) => (
            <LeftEvents key={u.id} user={u} />
          ))}
        </ul>
      </div>
    </div>
  );
}