import * as rm from 'ramda'

import { db } from './db'

const main = async () => {
  // const user = await db.user.create({
  //   data: {
  //     name: 'Alice',
  //     email: 'alice@prisma.io',
  //   },
  // })
  //
  // console.log(user)

  const users = await db.user.findMany()
  console.log(
    rm.head(users),
  )
}

await main()
  .then(async () => {
    await db.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await db.$disconnect()
    process.exit(1)
  })
