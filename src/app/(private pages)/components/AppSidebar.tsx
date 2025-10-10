"use client"

import * as React from "react"
import {
  ChevronRight,
  Settings,
} from "lucide-react"


import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
} from "@/components/ui/sidebar"
import SiteLogo from "@/sharedComponets/header/SiteLogo"
import { Collapsible, CollapsibleContent } from "@/components/ui/collapsible"
import { CollapsibleTrigger } from "@radix-ui/react-collapsible"
import { dashboardLinks } from "./navlinks"
import Link from "next/link"
export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenuButton
          size="lg"
          className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
        >
          <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
            <Settings className="!w-7 !h-7" />
          </div>
          <div className="grid flex-1 text-left text-sm leading-tight">
            <SiteLogo />
          </div>
        </SidebarMenuButton>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          <SidebarGroup>
            {dashboardLinks.map((item) => item.items ? (

              <Collapsible
                key={item.title}
                asChild
                defaultOpen={item.isActive}
                className="group/collapsible"
              >
                <SidebarMenuItem className="my-1">
                  <CollapsibleTrigger asChild >
                    <SidebarMenuButton tooltip={item.title}>
                      {item.icon && <item.icon className="!w-5 !h-5" />}
                      <span className="cd_fs-base">{item.title}</span>
                      <ChevronRight className="!w-5 !h-5 ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      {item.items?.map((subItem) => (
                        <SidebarMenuSubItem key={subItem.title}>
                          <SidebarMenuSubButton asChild>
                            <a href={subItem.url}>
                              <span>{subItem.title}</span>
                            </a>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </SidebarMenuItem>
              </Collapsible>
            ) : <>
              <SidebarMenuItem className="my-1">
                <SidebarMenuButton tooltip={item.title}>
                  <Link className="flex items-center gap-2" href={item.url}>
                    {item.icon && <item.icon className="!w-5 !h-5" />}
                    <span className="cd_fs-base">{item.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </>)}
          </SidebarGroup>
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter>
        {/* ==== something on the footer ======= */}
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
