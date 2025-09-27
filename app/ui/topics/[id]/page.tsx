import React from 'react';

export default function Page({params}: { params: { id: string } }) {
    return <div className="">Topics Page: {params.id}</div>
}