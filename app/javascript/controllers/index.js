// Import and register all your controllers from the importmap under controllers/*

import { application } from "controllers/application"
import ScrollReveal from '@stimulus-components/scroll-reveal'
import Dialog from '@stimulus-components/dialog'
import TextareaAutogrow from 'stimulus-textarea-autogrow'
import ScrollProgress from '@stimulus-components/scroll-progress'

application.register("scroll-reveal", ScrollReveal)
application.register('dialog', Dialog)
application.register('textarea-autogrow', TextareaAutogrow)
application.register('scroll-progress', ScrollProgress)


// Eager load all controllers defined in the import map under controllers/**/*_controller
import { eagerLoadControllersFrom } from "@hotwired/stimulus-loading"
eagerLoadControllersFrom("controllers", application)

// Lazy load controllers as they appear in the DOM (remember not to preload controllers in import map!)
// import { lazyLoadControllersFrom } from "@hotwired/stimulus-loading"
// lazyLoadControllersFrom("controllers", application)
