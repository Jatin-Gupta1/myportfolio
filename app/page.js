"use client"
import Page1 from '@/components/Page1'
import React, { useState } from 'react'

const page = () => {
  const [marks, setmarks] = useState(80)
  return (
    <>
    <Page1></Page1>
    </>
  )
}

export default page