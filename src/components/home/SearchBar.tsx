import React from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu";

const SearchBar = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="hidden md:block">
        <Avatar className="h-[28px] w-[30px]">
          {isLoading || (isError && user.profilePhoto) ? (
            <UserIcon className="h-[28px] w-[30px]"></UserIcon>
          ) : (
            <AvatarImage src={user.profilePhoto} />
          )}
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {isUser ? (
          <>
            <DropdownMenuItem>
              <Link href={"/profile"}>My Profile</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href={"/logout"}>Logout</Link>
            </DropdownMenuItem>
          </>
        ) : (
          <>
            <DropdownMenuItem>
              <Link href={"/login"}>Login</Link>
            </DropdownMenuItem>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
}

export default SearchBar