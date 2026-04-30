import {Route, Routes } from "react-router"
import RootLayout from "./layouts/root.layouts"
import PublicLayout from "./layouts/public.layout"
import HomePages from "./pages/public/home.pages"
import CategoryPage from "./pages/public/category.pages"
import SubcategoryPage from "./pages/public/subcategory.pages"
import NotFoundPage from "./pages/public/not-found.pages"

const App =() =>{
  return (
    <Routes>
      <Route element={<RootLayout />}>
        
        {/* PUBLIC */}
        <Route element={<PublicLayout />}>
          <Route index element={<HomePages />} />
          <Route path="/:category" element={<CategoryPage />} />
          <Route path="/:category/:subcategory" element={<SubcategoryPage />} />
        </Route>

        {/* 404 */}
        <Route path="*" element={<NotFoundPage />} />
        
      </Route>
    </Routes>
  )
}

export default App