export type ElementList = {
    id: number,
    name: string
}

export type ListProps = {
  list: ElementList[];
};

export type PropsChildren = {
  children: React.ReactNode
}

export type UserInfo = {
  info: ElementList
}

export type Users = {
  avatar: string,
  details: {
      city: string,
      company: string,
      position: string
  },
  id: number,
  name: string
}