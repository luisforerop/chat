import React from 'react'
import { AuthNavigation, ChatsNavigation } from './stacks'

export const HandlerNavigation = () => {
  const user = {} // null

  if (!user) return <AuthNavigation />

  return <ChatsNavigation />
}
