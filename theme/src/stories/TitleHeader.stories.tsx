
import React from 'react';
import TitleHeader from 'components/TitleHeader/TitleHeader'
import SearchBar from 'components/SearchBar/SearchBar'

export default {
    title: 'TitleHeader',
    component: TitleHeader,
};

export const Default = () => <TitleHeader title="Hello World" subtitle="Hello World" />
export const ComponentSubtitle = () => <TitleHeader title="Hello World" subtitle={<>
    <span style={{ fontWeight: 'bold', marginRight: 5 }}>This is bold</span>
    <span style={{ fontWeight: 300 }}>This is not bold</span></>
} />

export const WithControls = () => <TitleHeader title="Hello World" subtitle={<>
    <span style={{ fontWeight: 'bold', marginRight: 5 }}>This is bold</span>
    <span style={{ fontWeight: 300 }}>This is not bold</span></>
}>
    <div style={{ width: '100%' }}><SearchBar /></div>
</TitleHeader>