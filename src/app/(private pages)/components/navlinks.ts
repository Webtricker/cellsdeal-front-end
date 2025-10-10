// This is sample data.
import {
  LayoutDashboard,
  Shirt,
  Truck,
  Users,
} from "lucide-react"

export const dashboardLinks = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: LayoutDashboard,
    isActive: true,
  },
  {
    title: "Products",
    url: "/dashboard/admin/products",
    icon: Shirt,
  },
  {
    title: "Users",
    url: "/dashboard/admin/users",
    icon: Users,
    items: [
      {
        title: "Blocked Users",
        url: "/dashboard/admin/users?status=block",
      }
    ],
  },
  {
    title: "Orders",
    url: "/dashboard/admin/orders",
    icon: Truck
  },
]
