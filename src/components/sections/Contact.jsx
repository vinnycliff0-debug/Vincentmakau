import React from 'react'

export default function Contact(){
  return (
    <section id="contact" className="py-16">
      <div className="container text-center">
        <h3 className="text-2xl font-bold">Ready to get started?</h3>
        <p className="mt-3 text-neutral-600">Contact us for a consultation and a tailored plan for your product.</p>
        <div className="mt-6">
          <a href="mailto:hello@vincent.design" className="inline-block px-6 py-3 bg-accent text-white rounded-md">Contact Us</a>
        </div>
      </div>
    </section>
  )
}
