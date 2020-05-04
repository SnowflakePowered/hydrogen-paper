
import React from 'react';
import { withStyles, createStyles } from '@material-ui/core'
import Sidebar from 'containers/Sidebar/Sidebar'
import { action } from '@storybook/addon-actions'

export default {
    title: 'Sidebar',
    component: Sidebar,
};

const styles = createStyles({
    container: {
        height: 'calc(100vh - 84px)'
    }
})

const SidebarStory = withStyles(styles)(({ classes }) => (
    <div className={classes.container}>
        <Sidebar />
    </div>))

export const Default = () => <SidebarStory/>
