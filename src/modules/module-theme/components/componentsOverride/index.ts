import { Theme } from '@mui/material';
import { CssBaseline } from './CssBaseline';
import { merge } from 'lodash';
import { Button } from './Button';
import { AppBar } from './AppBar';
import { Toolbar } from './Toolbar';
import { Paper } from './Paper';
import { TextField } from './TextField';
import { Menu } from './Menu';
import { Tooltip } from './Tooltip';
import { Select } from './Select';

export function componentsOverride(theme: Theme) {
    return merge(
        CssBaseline(),
        Button(theme),
        AppBar(theme),
        Toolbar(theme),
        Tooltip(theme),
        Paper(theme),
        Menu(theme),
        TextField(theme),
        Select(theme)
    );
}
