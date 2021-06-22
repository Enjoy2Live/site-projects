import React from "react";
import { Logout } from "../../../../utils/Logout";
import { env } from "../../../../utils/EnvironmentVariables";
import { AccountMenuDropdownItem } from "../AccountDropdown/StyledAccountDropdown";
import { AccountMenuDropdownButton } from "../AccountDropdown/StyledAccountDropdown";
import Link from "next/link";
import { MenuButton } from "../AccountDropdown/StyledAccountDropdown";

export default function AccountDropdown(props) {
  return (
    <div>
      {props.userData.id ? (
        <AccountMenuDropdownButton
          toggleBtnText="Menu"
          dropdownItems={
            <>
              {" "}
              <AccountMenuDropdownItem>
                <Link href="/user-profile" passHref>
                  <a>Visit Account Page</a>
                </Link>
              </AccountMenuDropdownItem>
              <AccountMenuDropdownItem onClick={Logout}>
                Logout{" "}
              </AccountMenuDropdownItem>
            </>
          }
        ></AccountMenuDropdownButton>
      ) : (
        <MenuButton fontSize="1.2rem" href={env().GOOGLE_AUTH_URL}>
          Sign In{" "}
        </MenuButton>
      )}
    </div>
  );
}
