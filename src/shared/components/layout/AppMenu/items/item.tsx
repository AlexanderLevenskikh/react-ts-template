import * as React from 'react';
import { MenuItem } from 'root/shared/components/layout/AppMenu/items/index';
import { FC } from 'react';
import { AppMenuLogos } from 'root/shared/components/layout/AppMenu/logos';
import { AppMenuLinks } from 'root/shared/components/layout/AppMenu/menuLinks';

export const AppMenuItem: FC = () => {
    return (
        <MenuItem
            title='Пункт'
            link={ AppMenuLinks.item }
            logo={ AppMenuLogos.item }
            isActive={ false }
        />
    );
};
AppMenuItem.displayName = 'AppMenuItem';
