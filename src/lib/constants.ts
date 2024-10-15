import GraphicDesignImage from '../assets/images/pattern-graphic-design.svg'
import UiUxImage from '../assets/images/pattern-ui-ux.svg'
import AppsImage from '../assets/images/pattern-apps.svg'
import IllustrarionImage from '../assets/images/pattern-illustrations.svg'
import PhotographyImage from '../assets/images/pattern-photography.svg'
import MotionGraphicsImage from '../assets/images/pattern-motion-graphics.svg'

type Skill = {
  image: string
  title: string
  width: number
  height: number
  class: string
}

export const skills: Skill[] = [
  {
    image: GraphicDesignImage,
    title: 'Graphic Design',
    width: 128,
    height: 192,
    class: 'purple',
  },
  {
    image: UiUxImage,
    title: 'UI/UX',
    width: 64,
    height: 64,
    class: 'orange',
  },
  {
    image: AppsImage,
    title: 'Apps',
    width: 64,
    height: 64,
    class: 'pink',
  },
  {
    image: IllustrarionImage,
    title: 'Illustraions',
    width: 128,
    height: 64,
    class: 'red',
  },
  {
    image: PhotographyImage,
    title: 'Photography',
    width: 160,
    height: 64,
    class: 'teal',
  },
  {
    image: MotionGraphicsImage,
    title: 'Motion Graphics',
    width: 128,
    height: 64,
    class: 'dark-purple',
  },
]
