import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar"
import Navbar from "./components/ui/Navbar"
import './App.css'
import { ScrollArea } from "@/components/ui/scroll-area";
import { Slider } from "@/components/ui/slider";



function App() {


  return (
    <>
    <Navbar/>
   
    <Menubar>
  <MenubarMenu>
    <MenubarTrigger>File</MenubarTrigger>
    
    <MenubarContent>
      <MenubarItem>
        New Tab <MenubarShortcut>⌘T</MenubarShortcut>
      </MenubarItem>
      <MenubarItem>New Window</MenubarItem>
      <MenubarSeparator />
      <MenubarItem>Share</MenubarItem>
      <MenubarSeparator />
      <MenubarItem>Print</MenubarItem>
    </MenubarContent>

     
  </MenubarMenu>
   <MenubarMenu>
    <MenubarTrigger>Edit</MenubarTrigger>
     <MenubarContent>
      <MenubarItem>
        New Window<MenubarShortcut>⌘W</MenubarShortcut>
      </MenubarItem>
    
    </MenubarContent>
  </MenubarMenu>
  <MenubarMenu>
    <MenubarTrigger>View</MenubarTrigger>
     <MenubarContent>
      <MenubarItem>
        New Window<MenubarShortcut>⌘W</MenubarShortcut>
      </MenubarItem>
    
    </MenubarContent>
  </MenubarMenu>
  <MenubarMenu>
    <MenubarTrigger>Tab</MenubarTrigger>
     <MenubarContent>
      <MenubarItem>
        New Window<MenubarShortcut>⌘W</MenubarShortcut>
      </MenubarItem>
    
    </MenubarContent>
  </MenubarMenu>
  <MenubarMenu>
    <MenubarTrigger>Help</MenubarTrigger>
     <MenubarContent>
      <MenubarItem>
        New Window<MenubarShortcut>⌘W</MenubarShortcut>
      </MenubarItem>
    
    </MenubarContent>
  </MenubarMenu>



  
    </Menubar>
   <ScrollArea className="h-[600px] w-[100%] rounded-md border p-4 ">
       <Table>
   <TableCaption>Database of a College</TableCaption>
         <TableHeader>
            <TableRow>
                <TableHead className="">Student ID</TableHead>
                <TableHead>Student Name</TableHead>
                <TableHead>Year</TableHead>
                <TableHead >Branch</TableHead>
                 <TableHead className="">Student image</TableHead>
              </TableRow>
          </TableHeader>
        <TableBody>
          <TableRow>
                <TableCell className="font-medium"><Input type="email" placeholder="Student Id" /></TableCell>
                <TableCell><Input type="email" placeholder="Student name"  /></TableCell>
                <TableCell><Input type="email" placeholder="Year" /></TableCell>
                <TableCell className="text-right"><Input type="email" placeholder="Student Branch" /></TableCell>
                <TableCell><Input id="picture" type="file" /></TableCell>
          </TableRow>
         </TableBody>
          <TableBody>
          <TableRow>
                <TableCell className="font-medium"><Input type="email" placeholder="Student Id" /></TableCell>
                <TableCell><Input type="email" placeholder="Student name"  /></TableCell>
                <TableCell><Input type="email" placeholder="Year" /></TableCell>
                <TableCell className="text-right"><Input type="email" placeholder="Student Branch" /></TableCell>
                <TableCell><Input id="picture" type="file" /></TableCell>
          </TableRow>
         </TableBody>
          <TableBody>
          <TableRow>
                <TableCell className="font-medium"><Input type="email" placeholder="Student Id" /></TableCell>
                <TableCell><Input type="email" placeholder="Student name"  /></TableCell>
                <TableCell><Input type="email" placeholder="Year" /></TableCell>
                <TableCell className="text-right"><Input type="email" placeholder="Student Branch" /></TableCell>
                <TableCell><Input id="picture" type="file" /></TableCell>
          </TableRow>
         </TableBody>
          <TableBody>
          <TableRow>
                <TableCell className="font-medium"><Input type="email" placeholder="Student Id" /></TableCell>
                <TableCell><Input type="email" placeholder="Student name"  /></TableCell>
                <TableCell><Input type="email" placeholder="Year" /></TableCell>
                <TableCell className="text-right"><Input type="email" placeholder="Student Branch" /></TableCell>
                <TableCell><Input id="picture" type="file" /></TableCell>
          </TableRow>
         </TableBody>
          <TableBody>
          <TableRow>
                <TableCell className="font-medium"><Input type="email" placeholder="Student Id" /></TableCell>
                <TableCell><Input type="email" placeholder="Student name"  /></TableCell>
                <TableCell><Input type="email" placeholder="Year" /></TableCell>
                <TableCell className="text-right"><Input type="email" placeholder="Student Branch" /></TableCell>
                <TableCell><Input id="picture" type="file" /></TableCell>
          </TableRow>
         </TableBody>
          <TableBody>
          <TableRow>
                <TableCell className="font-medium"><Input type="email" placeholder="Student Id" /></TableCell>
                <TableCell><Input type="email" placeholder="Student name"  /></TableCell>
                <TableCell><Input type="email" placeholder="Year" /></TableCell>
                <TableCell className="text-right"><Input type="email" placeholder="Student Branch" /></TableCell>
                <TableCell><Input id="picture" type="file" /></TableCell>
          </TableRow>
         </TableBody>
          <TableBody>
          <TableRow>
                <TableCell className="font-medium"><Input type="email" placeholder="Student Id" /></TableCell>
                <TableCell><Input type="email" placeholder="Student name"  /></TableCell>
                <TableCell><Input type="email" placeholder="Year" /></TableCell>
                <TableCell className="text-right"><Input type="email" placeholder="Student Branch" /></TableCell>
                <TableCell><Input id="picture" type="file" /></TableCell>
          </TableRow>
         </TableBody>
          <TableBody>
          <TableRow>
                <TableCell className="font-medium"><Input type="email" placeholder="Student Id" /></TableCell>
                <TableCell><Input type="email" placeholder="Student name"  /></TableCell>
                <TableCell><Input type="email" placeholder="Year" /></TableCell>
                <TableCell className="text-right"><Input type="email" placeholder="Student Branch" /></TableCell>
                <TableCell><Input id="picture" type="file" /></TableCell>
          </TableRow>
         </TableBody>

 
       </Table>
    
   </ScrollArea>
   
   <Slider></Slider>
   



      
   ̀ </>
  )
}

export default App
