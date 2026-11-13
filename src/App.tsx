import {
  Sidebar,
  SidebarContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "@/components/ui/sidebar"
import { TooltipProvider } from "@/components/ui/tooltip"

export default function App() {
  return (
    <TooltipProvider>
      <SidebarProvider>
        <Sidebar>
          <SidebarContent>
            <SidebarMenu>
              <SidebarMenuItem>
                {/* BUG: not disabled, click still fires */}
                <SidebarMenuButton
                  tooltip="With tooltip"
                  disabled
                  onClick={() => alert("clicked (should not happen)")}
                >
                  <span>disabled + tooltip</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                {/* OK: disabled as expected */}
                <SidebarMenuButton disabled onClick={() => alert("clicked")}>
                  <span>disabled, no tooltip</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarContent>
        </Sidebar>
      </SidebarProvider>
    </TooltipProvider>
  )
}
