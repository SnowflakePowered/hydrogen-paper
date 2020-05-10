
import React from 'react';
import FileBrowser, { FileBrowserEntry } from 'containers/FileBrowser/FileBrowser'
import { action } from '@storybook/addon-actions'
import { createStyles, withStyles } from '@material-ui/core/styles'

export default {
    title: 'FileBrowser',
    component: FileBrowser,
};

const styles = createStyles({
    container: {
        height: 'calc(100vh - 32px)'
    }
})

const files: FileBrowserEntry[] = [{
    name: 'Hello World',
    modified: Date.now(),
    icon: "directory"
}]

const Story = withStyles(styles)(({ classes }) => {
    return (
        <div className={classes.container}>
            <FileBrowser entries={files}/>
        </div>
    )
})
export const Default = () => <Story/>
