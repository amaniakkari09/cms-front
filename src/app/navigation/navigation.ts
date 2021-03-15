import { FuseNavigation } from "@fuse/types";

export const navigation: FuseNavigation[] = [
    {
        id: "applications",
        title: "Applications",
        translate: "NAV.APPLICATIONS",
        type: "group",
        children: [
            {
                id: "home",
                title: "Home",
                translate: "NAV.HOME.TITLE",
                type: "item",
                icon: "home",
                url: "/home",
            },
            {
                id: "accounts",
                title: "Accounts",
                translate: "NAV.ACCOUNTS.TITLE",
                type: "item",
                icon: "account_box",
                url: "/accounts",
            }
        ],
    },
];
