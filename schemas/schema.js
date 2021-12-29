// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// General Objects
import blockContent from './objects/blockContent'
import link from './objects/link'
import mainImage from './objects/mainImage'

// Design System Schemas
import accordion from './objects/page-parts/accordion/accordion'
import accordionItem from './objects/page-parts/accordion/accordionItem'

// Admin Schemas
import survey from './objects/admin/surveys/survey'
import question from './objects/admin/surveys/question'
import multipleChoice from './objects/admin/surveys/question-parts/multipleChoice'

// Page Parts
import heroSection from './objects/page-parts/heroSection'

// Academics Schemas
import academicProgram from './academicProgram'
import programCategory from './programCategory'

// Blog Schemas
import blogHomepage from './documents/marcomm/publishing/blogHomepage'
import postCategory from './documents/marcomm/publishing/postCategory'
import post from './documents/marcomm/publishing/post'
import author from './documents/marcomm/publishing/author'
import featuredProgram from './documents/marcomm/publishing/featuredProgram'
import homepage from './documents/marcomm/homepage/homepage'


// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // Objects
    blockContent,
    link,
    mainImage,
    
    // Design System Schemas
    accordionItem, 
    accordion,

    // Admin Stuff
    survey,
    question,
    multipleChoice,
    
    // Page Parts
    heroSection,

    // Pages
    homepage,

    // Blog
    blogHomepage,
    post,
    author,
    academicProgram,
    programCategory,
    postCategory,
    featuredProgram,
  ]),
})
