"use client";

const navigationBar = [
  { title: "about", href: "/about"},
  { title: "jobs", href: "/jobs"},
  { title: "talents", href: "/talents"},
]

export default function LpNavigationBar() {
  return (
    <div className="hidden lg:flex lg:gap-x-12">
    {navigationBar.map((item) => (
      <a key={item.title} href={item.href}><span className="text-sm font-semibold leading-6 text-gray-900">{item.title}</span></a>
    ))}
  </div>
  )
}