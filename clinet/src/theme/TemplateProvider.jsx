import React, { createContext} from "react"
import { ThemeProvider, createTheme } from "@material-ui/core/styles"

export const TemplateContext = createContext(null);

const TemplateProvider = ({ children}) => {
    const theme = createTheme ({
        overrides: {
            MuiDrawer: {
                paperAnchorLeft: {
                    left: 58,
                    top: 15,
                    height: '95%',
                    width: '28%',
                    boxShadow: 'none'
                }
            },
            MuiBackdrop:{
                root: {
                    backgroundColor: 'unset'
                }
            }
        }

    })


    return (
        <TemplateContext.Provider>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </TemplateContext.Provider>
    )
}


export default TemplateProvider;