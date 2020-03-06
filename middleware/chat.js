export default function ({ store, redirect }) {
  const protection = Object.keys(store.state.user)
  console.log('protection: ', protection);

  if (!protection.length || null || undefined) {
    redirect('/?message=noUser')
  }
}
