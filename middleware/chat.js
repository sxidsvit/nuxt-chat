export default function ({ store, redirect }) {
  const protection = Object.keys(store.state.user)
  if (!protection.length || null || undefined) {
    redirect('/?message=noUser')
  }
}
