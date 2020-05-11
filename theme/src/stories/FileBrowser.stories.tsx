
import React from 'react';
import FileBrowser, { FileBrowserEntry, FileBrowserIconType } from 'containers/FileBrowser/FileBrowser'
import { action } from '@storybook/addon-actions'
import { createStyles, withStyles } from '@material-ui/core/styles'
import moment from 'moment'

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
    modified: new Date(),
    icon: FileBrowserIconType.DIRECTORY,
    fullPath: "C:\\MyPath",
},
{
    name: 'Hello World',
    modified: moment([2017, 3, 3]).toDate(),
    icon: FileBrowserIconType.FILE,
    fullPath: "C:\\MyPath",
}]

const fakeEntries: FileBrowserEntry[] = [...Array(1000)].map((x, i) => Object.assign({}, files[i % 2]))
const Story = withStyles(styles)(({ classes }) => {
    return (
        <div className={classes.container}>
            <FileBrowser entries={fakeEntries} onSelect={action('entry-select')}/>
        </div>
    )
})
export const Default = () => <Story/>
