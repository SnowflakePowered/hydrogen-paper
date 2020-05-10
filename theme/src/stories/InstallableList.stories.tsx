
import React from 'react';
import InstallableList from 'containers/InstallableList/InstallableList'
import { action } from '@storybook/addon-actions'
import { createStyles, withStyles } from '@material-ui/core/styles'
import moment from 'moment'

export default {
    title: 'InstallableList',
    component: InstallableList,
};

const styles = createStyles({
    container: {
        height: 'calc(100vh - 32px)'
    }
})

// const fakeEntries: FileBrowserEntry[] = [...Array(1000)].map((x, i) => files[i % 2]);
const Story = withStyles(styles)(({ classes }) => {
    return (
        <div className={classes.container}>
            <InstallableList/>
        </div>
    )
})
export const Default = () => <Story/>
