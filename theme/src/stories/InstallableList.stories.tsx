
import React, { useState } from 'react';
import InstallableList, { InstallableEntry } from 'containers/InstallableList/InstallableList'
import { action } from '@storybook/addon-actions'
import { createStyles, withStyles } from '@material-ui/core/styles'
import { Button } from '@material-ui/core'
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

const entry: InstallableEntry[] = [{
    installer: "Simple File Installer",
    title: "Super Mario Bros",
    artifacts: ["my file.nes"]
}]

const entry2: InstallableEntry[] = [{
    installer: "Simple File Installer",
    title: "The Legend of Zelda",
    artifacts: ["my file.nes"]
}]

const fakeEntries: InstallableEntry[] = [...Array(100)].map((x, i) => entry[0]);
const fakeEntries2: InstallableEntry[] = [...Array(500)].map((x, i) => entry2[0]);

const Story = withStyles(styles)(({ classes }) => {
    const [swap, setSwap] = useState(false)
    return (
        <div className={classes.container}>
            <InstallableList entries={swap ? fakeEntries2 : fakeEntries} onEntriesInstall={action('install-selected')}/>
            <Button onClick={() => setSwap(!swap)}>Swap buttons</Button>
        </div>
        
    )
})
export const Default = () => <Story/>
