interface MenuItem {
  label: string;
  url: string;
  desc?: string;
  featuredImg?: any;
  cta?: string;
  children?: MenuItem[];
  megaMenu?: boolean;
}

interface NavigationMenuProps {
  // You can extend this interface if you need to pass additional props
}

export type { MenuItem, NavigationMenuProps };
