import React, { useState } from 'react';
import { AiOutlineCompass } from 'react-icons/ai';
import { BiTimeFive } from 'react-icons/bi';
import FloatMenuBtn from '../Components/Restaurant/Order-Online/FloatMenuBtn';
import FoodList from '../Components/Restaurant/Order-Online/FoodList';
import MenuListContainer from '../Components/Restaurant/Order-Online/MenuListContainer';


function OrderOnline() {

    const [menu, setMenu] =useState([
        {
            name:"Recommended",
            items:[
                {
                    image:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYWFRgVFRYYGRgYGBoYGhgYHBwaGhgYGBgaGRgaGBgcIy4lHB4rIRgaJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHhISHjQrJCs0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQxNDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIALYBFQMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAEAAIDBQYHAQj/xAA+EAACAQIEBAMGBAUDAgcAAAABAhEAAwQSITEFBkFRImFxEzKBkaGxFEJSwQcjYnLRguHwkqIVM1Nzg8Lx/8QAGAEAAwEBAAAAAAAAAAAAAAAAAAECAwT/xAAkEQACAgICAgIDAQEAAAAAAAAAAQIREiEDMUFRE3EiQmEyBP/aAAwDAQACEQMRAD8A1gua0Nib+tTuwG1RXAD0qjBsEOJJpO5oiza8qe9iaZGwNbk0gpou3hNaL/CxRYKLAEXSmi11qxTDGdRU6YYUWVjYAqmKbkNWXselPt4egeJWKhqW3aO5qxexFeW7c0WGNAqWZNEDDiihaimu0CgKALuEFDpgZNHs/evVWaCXFCt4ZQOlTI46EVzrnTjt+zeCKciZdOuaftS5Rw7uHxNy9kRfdRm95vSdKhz3R0R4m42jozk96FvYdzsJHkao8Lzlh3hScjxLBth8a0mGuh1DIwIPUHSqTT6MpRa0yu9iw3BqQgkRVi4PXWhL+nlTIcaB/wAPrTmGWpLdJ0k0UKiQDw0rNg71Ilg0bl0igtRshXUMPKsmbRzEeZrUXGyeIdKCxWGDTcTXTUVMkaRKVoFWnCuEs/icQvQd/Wn8A4bnJuOOvhB6VpAI2qEi0iK3hkUQFFSUpqBmJMCmUTFq8qNbVSolACFpT0r2vJjrSoAzQw80vwmtWISKWSrMcQZMLpT1w8UUor0UwxRAEqREqULSYUBQ3LXjJ2ry9cVNXZVnbMYn0G5qAYyfcS4/nAtj/vIP0pDony09Vqn4px32IJcW1IE5c7M8dyAoCjzJA86A5Y4zisSzvlRbU+BijZZhfANVZzu2aI8Ua9C/A8XVmrdRFRWWA0odnvdrTf8AWn7tTVv3Bq1if/buK30dU+9Mlh7GqrFYmb62+yFvWivx9s6FsjbZbqlJPZWbwsfRqq+YsG4yX0Bz291/Uh3jvSYVZZm1VVxbiVyyGdUFxEUlyGhl8467VScb5qOQLY94jxE/l8vWq7kniZb8QmK8WcAqGPvbiDWb5E3SNY8LSya0ZTjvG3vBAynRmYv1gkkD61p+QOCNibThw4UHMsHLM+dB4rhSXL9m3kgO/jy7Zd9DXS8XjbXD8OoRDlELoPvUr+mz1pFXi+WcLBtuBaBTMVzD3tg0ms3yrdfA3Ht3WZ7bN4HE5Y8u1DcxcRfFeO8FtogLJE540kfSouOpc/CI6MURE2O/lSuugpPUjp2GxiXBKMDUePICmdoOtcg5a4pe94MVj61r73HXxITDoP5jmGI2UdTVR5bdPsznw0sl0ajhLZ7Sv3/Y0eLVSYDCC3bRBsqgUQwrY58UMQaUjXuamsaBgtxJrP4jEvZc5du3StMgk1XccwOZcwoJryN4bzKhGV/D9q0GHxKOJVgR5Gud3OHEWy87HUUDbuOhlHZfQ0qTLya7OqsIpgSueWeP4hfzz60da5qujdQaWI80bcCmvaJ2NZIc2v8AoHzpHm5+iD50YMecTSm21Ksm3NN4/lUUqWLF8kTSxSy1IBXkVQjwLT1SvMtezG9AAuKxYSJ3JhV6sQJO+wA1JOgqJbjvrOQdwPEf7QfdHmdT2Wqvgr+3ZsU/uuSLYOy2kbwfExnPmR+kQ3iXM1tAwtgXCvvNOVF/1fmPkKiUktstQlJ0kQ4rmnBYe69t2YOkZ2yO5BIBALwZMEfMCs1xjn17gC4dWTMfCNrrnX4Iukzrp1O1a7inKgxosPiWAKrmZEUKSX1ylz4soECJiQx7Za7H8iYdHNxf5dsI2ZcxdnCAFVUn3EOxGp8IpOT8FRil2cyxWKbOWus7vmgIhkKSB4iG8ROogkhj6CveFccxNos6XLiZtyfcJ1YBjtJJnXqTO9E4e3Je2iEM7akBoRgWABcdYaSNPXahMKhz5nTMy6ZFA2aQcxAkjKRBmetSmatGtw38T3yZLyBXUjxIIV4Ozg6oNtVJmDoK1eF5vRtwjL4YdHEPm2KhvtMg6b1zFcFnbxqylUgllZVbSDnIgamB3mjuEW7rjIqoGnKtsL4XUHQoo1zdYB1Gu4qXJ9oFCP7LR1izxWzcIQkDODAfTNtIHRtx86ZisMbKk2jCDe0ZNsj+ld0PmpHxrmdl3RnUrluW3ysisGiHgjKdu5+hrR4Dj10KLbgFYidYI+uXtpp5ULm8SB/837R6GcSwCODdRf70/Mp8/wBQ7MB6gdaS7wXDNE3rlh+/vrJ+Z+1XBd7V1TPgcdwwKncSNCRuPMeoqoxVtFuMGJgyV7AHSPgQRVZR7YYy/wAodbe9hQMjpfQGQ4BVl8uv3o+7zM7rldTHY0Tc4+lqxatIobKJJ0Oo6GpluJibZZ7Op0QrpBqZOL6GuOXkAxHEQUGW2jf3kCBQHHcU+IQW8yJbESF8RMdPIUTxTh1mwUZ9yNFBnXziqu7iEABGk/lHSolNLwaR4b7Z7hsESAM0KO25rXckYZA7ZV1HXrWMXGnZRE/OtDy1fu20d0WY3mq4nvojmWuzphavHrCrzdeU+JAR5Gj8LztaJhwUPmNPnXSpI48WaYjWvctQYbiFu4JRwfjRns+tMVDQsV46AiKfFe5aBmX4vgioMaA1SnCECa39+0rKQ1ZDiNnIxAOlCIkip9nSNqpXemZ6ozGezrwgV6z0w3BQA+KVRG7SoA6OppwND5qchqTosmJqHFoWRwNyjAepUgU4NUre6fQ/agRzPE8SjDWrC6IqD2muUsRMIBIMaSY3kDvQPDbBu3knwoXTwAxpmXTTuD02qyx2GzMyeLKXJgHKG12kgjMNx/vrmxxBziFFtLy27T6KoCPcZSSczNELIAI3I3A6ck4tys7uOSUKOuca4yMOqOUuXA5UAIubLJC6nQAAmdTO/QaMxvEbMSzZtSns5EMTlJBViAx0BHYFu5qrw/EEuIEuscjQyOuyzBAI+G/rVZx3l+LT3bbq+RC+aQfCvicFT0IWKvJvoxxS7Mby+GuX3TOsZncqCrOTkiVUEEEHfxD3QNZonh3CbWd3uLcuMPG1q3AzASogtqJy7HTUidKF5Jt5bwxCsRq250A/MWJ7a11K1w5JLMEGZcjk6EhoJB00mQdqBuRzXEhbl05QUZ/FlAy/y2YFSizETAgD8w8xUuLwa2At609z2gy3LZb2jyobMpaJC6AEg9dD52F3COmMKke1tEl7bk6oT4spJ8XvCIHcHoZs+G2bl1AWHiM5gJgE+R2pMeWiuxWBXFWPxGS2t919o7gModlQqGBB0UwrddhtJoS1iWUOoXMEtqzKNWZ5nwA6sIzanWQOhmtpgMGERlIywdgAJEyY3GuoOnU1Q4NmDOQoygkKFIGXUrlBbNAmIJn49c+Tw2bcL00iLDoHGXYMARIy5W6Eg/WqfjYKMmaQzJnII6O9xl+kVosEmdhmVZJ1VZYf0gEgE6RuO86UBz9b/mIeotKD/wBTn96UVSdjm7kqKBbw6iiExTBYDsF3ABI1qlk1MTpUtFKQ7E4kTJJY9yZ+9RLfBqBzUtlRTSE5BNkx6mumciWA1h8w95z9gK55YQSK6pyphimGXu0t89a6ONbOPmloz/G+Gezfw+6Tt2odcDbuLlYQaJ5vwt/NnQkgdKzeB5jVHy3lII61bjTIjNPsvuEcp3xczWXygazOnyrd2Q6KFukT3GxoTljjVm6hyOum4kTWf525kQMERwcv6TOtGVDq+zZLFIms9ypjzdQOzBvKtMShG2U/L7aVdkdgGLeBWH4ziobWttj7J6aj6/71iuN4WSft1pozeinfF1A2OqsxaOhMaigHx3cGldBSZftxAVC3ERVGcYK8bGLRkLEuG4gaVUZxvlSoyDE7tmqUGoVFTKvemWPWpE10qMVLbFAzmhuhyyN/5i5guhOw3IDLm21E+lE4fF5vAWMAzDNDCImW6/p/Memg1ql5xQ28S5UkEMWEaRJkfevOFcwW2JF8EMfzrGp6ltOvXWuWbaZ2cdNBt7CXLJcowa2zE5G8BTNqBmkp16sPnSve0a06qHVXRlzgF0GdSshl0O/emXsPfZy6XwLUhEKKSwLQBIUzmJJE5o8O3QE/+EXFElyW18bKmfb9aqDpB2NK49l4tkPA8qIqLHhOUDymJJjeNat7Tu19yzkJkC24byBLZTIBmRr2qkuXMSnvoXHUm7dQ+c+MgfDSmf8AiDrvhXjst5zH+qJppr2Q414LJ+HW1z3MTccqpDKxZyok6AIu5kiNK1BxtqwpiFEaDQEwNlnc1iTxN+uGu+Uuxj5miLXE8RB9jhkQn8xgE+sAU06E437NFiuIFgWRTESWPgQDvneAR/bNUXC8NmJh5VnbMw2JLFjlJAkAkCY6daibAXbvjxNwkA+4Jyg/89fWliOO2LCFVOciIVD4RHdtR+9TKUftmkIPvousIwtuHbwos5R1ZthHfrrVLzA5uHOeqj9zHyIrLpx97lzM5291ei9oFaVlJw6Ofz5vkGKj6KKmKdOwk1kqMu9vWk5gVLiG1NBYm5UtAmQO9SJcoNmq4wdhbaLduLmJMoh2P9TeVMO+iy4DhWch2ByTqxECJ1gneus2HbIoRVVYEFjr/wBK/wCa5NwqzicZeIzQq+J2MJbtJ3IGgHYdfma61w1YWFEoiBVd/fdo0YJ+Re0gk9gAC3RxvRzcsdgnGsctiy924/hUbKolmOgVZnUmsjy1wtMelx8ShDB4GTKBDKGC7bqCNfOqHmbjGKvsVvspS1ceEUaZyxRVWB4o2BPmah4fzbewyCyjKoTfMhXxEliTOhzZp1PQbU8ti+LXizVYn+G2HmUuXEPqCPsKZhuR0tmbiNdH6kbxfFG/Yn0qfgfNN5rN3E31RrS5YZCFObRSgXXXWdYHaZgaHhnH7N5QVYKx/I5Abf6zvVJxIcZLtAXCuD2ln8NcKke8hkFf7kbUVbG5eQaqGjtU2JwSXIJlXX3XTR09G6jyMg9RUXDsezM1i7AuoMwIELdQmBcUdCDoy9DHQirsjH0DYXicls4KR8q8vYqzc8Lx5MNx+4q4/DqVggVT4vltHJOq+ho0LaKHi/LLFc9oh13jTN8OhrD4/B5TBWCNwRXQLvCcVYOaxdkfpfUH1pjY6zfGTG2TafYOPdJ8n6ejUmFJ/wAOZXMJpqKHGFrb8V5fdBmQh03kdvMVSG2AIZYp6E1JFMMPFKrn8Op2NeUUTbOu54FSK1DxrU1uguyYVLbqNalRKCjnX8R8F/MDj86j5r4f2Fc1vLBruHPGAz4cOBqh+jf7gfOuO46zBNYzWzaD0CYbGuhlGK+hirzCc4XlAVsrgR7w1001YGs66U3LWTijeM5I29vnNSIe0pB3hz5dxRdvm2yBHsj65h9orn4FOUGowXsr5X6N7c5xtDa0fiw/YVXYvnS4dERF84k/Pb6VkyKRijBB8jCOIcYvXT43Zh2nTf8ASNKCa4Y1qQpULDWqSS6E5N9hXCbZZ/Ia/IV1fjXC2t4e2ke4iKfUKM31msbyDwv2l5JGhdZ/tBzN/wBqmurceRiCQJB3rWMbizn5JYyRxvGSGMiq3EvW/wAelh1IdMpn3wNvjVcvLOHcgLiF12kip+N+DT5F5Mfw61nvW0gkM6AgbkFhIHwmtTjMIb97siKo07BZAX571d8scCwyYm1lfPcV5AGolQT9hXnMOFOGe86K7WzJRl/JrLKwH5Z2O2wpTg0i+KcZSNpw3hn4bAlbNtTc9mbmUic1zLmUHuQQAPSudcW4niExWIKoVu3kVLhEeEFF1UAmGXvB94+Qro+E5lsnCJincJbygvnGo/LlidGzadax2L5XbGYzFXCxtolxVV9ZdmRSQpBkAKwn+6tK0qMk9uzB4niADZAWC29C48XjdSrSIHTMs+ulGrkVVLuWBObM2uUg6TIyOu2407CrjB4LDWsSeGEfiEuvD3VBR0uItyWElg+UMBrpmLVT4nhuR3e1cBCPrbnK5tgAW2KMAWIWFZcsgjY0mi1IucPgblvBsrBbmHvkXVRAJR1/PdlAchyBZBMEqRQlnDpAZGZ1ufzFk6pm3UdRB6dKsuAYK/Za3euZXw4W4FVGJCq7ELaKwDlzupjULB7RVJxBGw2IdImxcdzbYflzeIqe2s1HIm46K42lLZqOCcwXbBCuS9vsdWUf0n9q0GOxiNfwN62wIe66T3R7bZlPxCadwK5/aICjKdfMaHz303rT8qYBTczsSSohBrlV5BdgO5AAo4Zyf4hz8cUsl2dFikRUZaKRauo4iO4tDXcGr6MoIPcUUwrwmBQSUqcJyE+zJUfpOq/7V5f4Hh7gPtFNt+66A/t9quAZNelaGNOjDXOEYa0SGcGTppGgpVsbmGWdQPkKVKis36A0eaIsimKlT29KohBCCKdmps6V4s0ih+Ish0ZDsykfHp9a4rxvBlHYEQQSCPSu3IawPPvDYf2gHhfU+Tdf8/GokrRcHs5jftwaiKVZYu1pQcVgdIPkp2WpSKa1KwGRTa9JrylY6JMtRrbkxUiNVrwPBZ7g66/WmtgdI/h9wvImcjWPq3+APrWrv2yZqLh1kW7SpsYk+pqdrnlXUlSo45u5NmO4zwrfKN96x+IwOU+4s966hjlJGoqiu4CTMVVJmTbT0UHLGIdMQhIUKoZtBqYU9av+YcYmVHz5RJ8QMHUGf8EdagsYLI5eNlYfMRWR49jWW09loKXNWBE5YIh17GR0rHl1o6eDewzAcVey7Gw6BSZyFf5ZM/lVzIHmCPStRw3me+7Z3sRaXwsyMCwuaEQrMJBB6bfbH8o8rDEi4A4VFVDKHNmZpiVaDAA1JiCK0Cfw5yRN5yCQBk0Gu7TOm1JKlo0k7fRJwQYbDXLl1Ld0u50Z0dmUHdQYMSdzudNazmP4Bh3dmTMhLE5VDiJnQAjvVzc5SvjMExLhV6k9JA1I667eXxqnxfD8YkD8QxUnLmB8Mnpm+NS/saieYKymFMq9xmIZQjEqhmCSFIEnQd6rPwDYi6XuOx10VB4VA6Fm+4FSvwly83CziSMwaZjtPSrKyXskLJdDpJjOunhnv6+fSh1Q4xbe0ErhAFARQpgDU5j6kkDX0Aqz5exYtuQ50AkHz2iO5MCqw3YVizBREEt+3c1R47FFoZJARgZO7AHc9h1is4vdo1mvxpna7WKR0Lhlyp7zHQKQJMz2qRCCsgyD1Go+YrnnBuE4rE5mzBLRfOSx0ZuwUdp30qwt8Ox2DuM6Mr2mlmUEsB6qdR6iuuzicUjZkRSJoXh+OW4mdRH603ynrH/NaIuL56GiyWvR6pFeM1QtPQ0iPOmSTGlXgYGvKB0RU9UpqL3pxNACZ+lOFMAFPigB4NC8XwQvWmSNQJX1HSihT1oA4zxLCZSRFUT24JFdQ5s4XDZ1HhbX0bqKwWOwsGa55xpnVB5IqHSorlWD2tKAurFZmlA7V4TXrCvCmtIY6ySTpXSuQOEAuHYe6JmsNwjB53GnWu58ucNFqysiGYAnyHQfv8a141uzLkdIKuJOs1FlM6UflHalNb2cuIC+FZqjt8MP5iKsprzNRY8UV+M4cuRzJkKa4xzOP5/llj6mu73BKkdwR9K4vxrCl715DuqSn9yy311FZ8mzfi1ZnLGLa22ZGZGGgZSQfpWrwf8AELEquW5kuDufA/zXSde1Ya43+acj9KyX8Nvs6MvPCMhRkuIMwIyFSBGsSdTrrQ1zj+HZQDdfTTVG0HwrDhq8dj3qWm/I4yS8GvxPHsMAVU3X03ygQY8yKAv8yFj4LarP5m8TfIQPvWVdz3qfDCpUfZTn6DsRindwzsWPc9PQbD4Vd8Es5nA3zfvVO1nQE9/qK0/BnS1ld5IEEgDXyitIqjOVs61hrCoioihVUAACnzVLgOacNdCRcVWf8jkBg36SP+TVo99Ruy/MV0HNQHbwwt3fBoryY6A9QPKdfjRKNoR2MfDf969bxEN2mPjTcOujH9TSPQAD9qYkqBiIMUnfUQKnuJmGm9BqSTB6U0yJRoKtDSlTRSoEPimmnV4aBjhTppgNJj0oAcGqVfKvMPZG5otRSsaiDYjBC4hRhuPkehrmnGuHG2zKw90//ldWZwN6y/NlkOoZYnUeRI6T3qJq0acbxdHLcRlqoxO9W/EVKkhlg1SOwmuZnWRBaltWJI0o3CWkiTVtwzAtcfLaQtB8UDwqNPebYUlt0JqlbNHyFwDO4dx4E1P9R6CumOaqeB2fZWlTYnXXv5jpVgl4NI2Ybj9x3FdcI0jmlLJjyabNeGvCaog9mlNR3LoUEsQoG5JAA+JqqXmbCZ8n4m0WJiM437TtSsZdq1c55uwHs8YlwDwvH+/3PyroYNAcc4cL9uI8S+JfUUpK0VGVM+fcdZKOVPQkD4EionQVp+PcJIY6ag1RXsMQBXP0dBEh0qTLpT7diBrUtxNqLCgd7Wk07DLFOJgUxXpWOizdgQo8h/mt3ybwwXiWYSqAD4kQK5slwnYa1ssLxi7Ywxw9t0zXCSzgmUDACPMxVQ7In1ousHwDh6XHz4m07ZycjOng192Ks7fH8ChyWT7RgYy2UNwz6qIFUHLPLeDUB3Htn3l/dB8k2+dbvDZFEIqqOygAfSt43RjLsrrSYjENNxTZsgyEn+ZcA2Dx7i+UyavgBEDamK9PBqiTwW6HxFmPEPjRgpMlAPegO22leVJ7EjavKZnTFXkU9aaZoA9gUxo1NPy1FcBg0AF2DpUpaBQ2GedtoqLitxlQZdywXXrmBEetSjRlLzbxg2bIcGDccInksEkjzIH1rO8O5sPs5YAqrZHVhvm1BPxkVF/FgtOGQe74j/qGUD6E1l+GvkJPhAI1DDNFLKrTHjdNG+xT4PEIGuhlgAAwXgdIZfFHrVNc5R4exn8Zkn+pfswobh+KyPHtVuKwnI9vQeQIMirTC8VtM+RcNqNyr6A94HSljCQ7nEN4VyZw+J9q9+P6oX/sj71pkFqygSyioo2AH2Hfzr3hNpcoZvZJPQMWPp4o1ojF4nDWvEzKT2BB6TsPSnio9Cycuyqxl8pad30mAJ39ak4TxBbiI877HsevwrGc1ccOJfJbHhEgAdf6jRXAL3skKsYAg69ABqaMrdBi0rZvGuCJJ03msLzL/EJLUphgLj7Fz/5any6v9vOsxzNzTcxANm2ctvXY6vr+fsI6fOqi/wAOFpFzAl22U/eOgpOQKJBxLi2IxJzXnZydlOiL6INBXuC4edNJZzlVf1M2ij4k1Y4LhZ0Z9SdhWm5M4Yb18X2HgtHwdi+0/D/nSpdvSLSSVs6PhreREQmSqqpbuVUAn4xPxqaYE00GvX2NaIyOdc18StrcZXWJ2YbfGsbjb6dCCK1fPfD5OeK549tlO0jttWM4uzohJUPu4moGv1IpQ6NnX4Bh9CKkt4eyd7pH/wAbf5qMWXkgR7pO9PtqTtRZs2vye0c9yAi/cmpMNhNdRTUWS5JGl5O4Mt3MNMwWST8gAP3ojjHL72gGzK0nYbigMASnukie1GAE7k/OtFGkZuTbAsJiXtsCJitnwrjAYAFtay4t1NZQg6CqRLOi4e+D1o221YjA33UbGrrhmKcmCCask0iioMTigoMa1HdvZRr2+VVF24WnUifKD+9NRIchPimYk6j1/wCClUlpBrr84/xXlWSWwr2vChr0IagqmJjTRUoTvThFKwojw9vKIpnFcKLll011XQjcMNVIPQggH4USKcDQUYbE+zxipYxLezxKe6W8K3RtmtsdJMDTcGay/H+W7lqfAwy7RqGHlXSeK8IR1KuguITOXZ0Y7tbbp6VR5MTaUph76YhP/QxPhuoOyvpPx0qZKyoyo5n+LddF94af1D4GDUb8QuvoWnvAZZ6a5TrV7xvCOWLX8K6eabfMAg0FhrOHB8Vxk9R/tXPK0dMWmajlXheKa2WW3bCuPedXMqdypYqPiCdqbxLBJZJVryu3ZDmOn6zsvpJo7hXDGe2rJndPyliwQ+maF3p2O4cqIz3Ws20AIJZgSPMZJE+UiqttVRGk+yu4PjLaAgWwZO53bsAe1U/M+OZLb9M7AEjr1IHlpQOM4gA2XDlzOntHHjfvkQ+6PNiPSql3zsUdg5G4Z2Lj0MZQfITVK6oiVXZJwLFqMxa0TA1diAgPSZ3FHWFa6+cZ20B9oRCeeUnoPlVRicSoC2wCFA2IGY6ycxHv7xJG0CjuIcfvX4BLaCCSdz3CgALpGlPfoLRYYnH5ZXNmJ0LdSOw7DuflWg4LzX7NFtogCj5k9SaxGHwx95j6kn9zVlw9UYBkMiYHzgfOmk0S3Z03hXMy3HCEQSO/7VpEaawnLvCCGDvv0HatnbetCAPiuBDqQRXN+N8vsjEqJFdZYTQd/Ah9xSaTGnRxRsEe1JcF5V0/GcvKTIFVl3l6OlLEeRjbOF8qMtYbyrRrweOlSpw09qeIWUluwe1FpYParK5YS2MzsFH1+AoF+Pok5LZbzfbygCklfQX7PUwTE6An0FH4fhTn8jfIiqK/x/EPoHyjskL170McXebVrjkdsxA9O3WqSFZ0fh+AUDxkDykTVqpVQQkfD965ZYxlxNQ7aST4ifvR2A5gd5COWCnKdOsT321HT/NOqJ7NVxLENsJ9BoSPif2oa3hzGZpHqY6djFMw2PLgB1HeRKmOsZdNu4qyR00CmPI/bMdD8YqroWNj7MARv8JpU4Hss/t5UqBFkTTC8UqVZmoHe4lGmWmW8Yx129KVKkMKt4g0UjSKVKmhM9egcbhkcQ6K3qJpUqaEU2JwKgSrXE8ldo+RMVVYjCGffY+p/wBqVKgRT8W4mbAAElnMDYAeZO/wqhQXMSc924YUyAP/AKg6L66nzpUqh9lroNGBXSAB9/id6zvEuBQcyMFLMZGsTMyDvSpUAPwIa6iqcouC5lzRIIWCZHnNH4N1caIBFzIfrqPlSpUCGcRwhLAM02gCzIIBMSQAQNtq1fBeH2rQGRACdz1I1IBPlNKlVITNRhrmlWdlqVKqEG26dtSpUgGuKEuClSpDBroHUVTcXxuQGBoIHqTsT5DtSpUPwC8mJxWLZzLksTrJ+VQKJ+1KlVCJQgXfXQn5Cdqp7mLe9EHJmeFjXKuQEtMe+c2/STB2pUqzmbcZpbbg22gAaFdhvlOv2oXgJCZrkaNduKR1hVSNf9J+dKlV/svohr8X9m6w9oQANJ/aj8Nb6GlSrRmaC7ljb/P+KVKlWRdn/9k=",
                    name:"IceCream",
                    description:"Tasty and Yummy",
                    price:"150",
                    rating:4,

            },
            {
                image:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUWFRgVFRYZGBgaGBgYGRgYGBgYGBgZGBgZGRgZGBocIS4lHB4rIRgYJjgmKy8xNTU1HCQ7QDs0Py40NTEBDAwMEA8QHhISHzQsJSs0MTQ0NjE0NDQ0NDQ0NDQ0NDQ0NTQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIANYA7AMBIgACEQEDEQH/xAAcAAAABwEBAAAAAAAAAAAAAAAAAQIDBAUGBwj/xAA+EAACAQIEBAIHBQcEAgMAAAABAgADEQQSITEFBkFRYXEHEyIygZGhFEJSscEWI2JygtHwFZLh8UOyRFOi/8QAGgEAAwEBAQEAAAAAAAAAAAAAAAECAwQFBv/EACgRAAICAgEFAAICAgMAAAAAAAABAhEDEiEEEzFBURQikaFx4QUyYf/aAAwDAQACEQMRAD8A5/EFTLfjZptiKjU1yKWuFuDlvqRp4yDlE4nwz6aOTaKf0i5TDyGSQogIisrYim8Ix5xGiY0PYTCtFEwoBYVoUUYi8AsOCFBALDghQQCw4IUEAsEO0BhQAO0IwXhEwJbDAiwsQDFgwFYMsIrAWiS0AthGFeAmJvAVioIm8EYrDvBeJgjFZYrUvDLiRIDJo11JBrCE1YSPBCg1QtniLwoDAA7wXiYICsMmIJhmJaNESkKzQrxEUIUJSscEECqYtViLsRaCOFT2hFD2gGwiCLyHtAaZ7QDYavDh5D2hZT2gKwocGU9oeQ9jHQWJgMX6puxgNJu0KE2hsxMd9S3Yw/s7do6ZLaGYcc9Q/YwfZ27Qpi2Q1BHvsz/hhfZ37Qpi2RqV5aaH+zLTotOmjAMNiAR5GKOHHad3YieX+fM5yOWGg/ZZp0f1A7QkpLeCwRE/+Qmc9XlUxa8pmdHFFe0HqR2j7ESfz5nOW5UhJytOiNTHaKXDjtDswF+bNmAXlUQ25UWdBTDjtCeiO0O1ET6ubOefsovaLXlVe03JTwhNYR9qPwX5czEnlkRK8sibbSBUEXZiV+ZMyScsL2i15YXtNcBFqIdqPwn8uZkf2ZUdI0/Li9ptSohNSBieOPwF1M/ph14AnaOfs6naaPEJYwqdSV2o/BPqZ/TM/s4naOry6naaWOoBaHbiL8qf0yv+gL2iP9EXtNVVAkF3F4+3H4H5E/pTrwZe0DcJTtLoNItdj0j0iS+on9K08MTtE/6YnYSW2aNEm8fbiLvz+hJwlT0EP/R17CTsM8l5hE4R+B35/QcBrBqSkG46eR1tLcTG8iVz6jKT7psPKa5Kwjg7iiMiqTH7SM62khHvDKxkEZapEfR7wGiDAFAjsBLQetiWMUiXiAWlcQPWB6yJiBaRlq6x0KywzQnW8ZQSQsQxgU4ZW0kqsQyQGMXMMsbSQqCLKC0LArTiCI8lYmFVpax3D04+BUR8TSJG0rXRgdpqBTkbF4cERJhRUU3khGkV1IMfpvGwBUF5FagbyYAYsiKwIqUDCfDSYhhMIrAhjCiEcED0k3KY6oj2AgU8LaO/Z4tybxV4WBleR6d6TfzfpNbTwplDyDhiMMrW943m0VRaRB1E0yq5MhIlobVLR2oJGqJeWZgXEwO14Ew148tG0YBJTEUUtHSthGSSYgIOLJkRKZlu2HvAuFj2FREot0kxrAXJA89JXcWxYw63tdrXA8O5tMZxTHvVYs7HQWFibAE9B+s58udRdLydWHppTVvhGtxHMlBGyAl2P4R/eRV5n0uUF9be18tJkKtXUZd7WG5Oo6yLTxWVcrPncHU+ew/vOZ5pvlHaumxLho12I5pqDVUUjTQXJ16xDcwVjr7PkFv+szS4vcrY5dP87RdOq2YH8RBIHjpqOwkd2ftmiwY/SRq8PzE4AzoPIHWWOH5lofeune4uB8plEpX+F+u58fDwhAasuZbCwsovaw2v1PlKjnmiZdNjfqjouHxSuLobjvHWW855TqYjDOcwemTqgYGzJ3Otj5TWcA44mJS4GV1sHTqpPXTcGdWPLtw/JwZsOnK5RJxWEuNJVqCray/D3kSvhs203UjnojiKjOqmxixEwFqkPLDpx68LHQwojoGkIwARAJyaw8ogYRvWUIVwqitOmiD7qgfIayf60TPevYHeOCuT1ieOXo2Vey3qVAYaAGUZrHvCWq2wJjUZIHCJoUsIGcd5S06bfeYjwkmmbbfWS3QtEWDMYEsNzIWcnrHUmbm/QKCGeO8TNCkXRC5HQSh4Jzw9QsrUrEC47X2F5rBSBFmAI63mT4jTQuxpAKoAF10La67TDLOSV2dfTwhLhohcSd6zFmb2j7R6Cw8OmkpWoqqFgL5r31JJ1FtT06W02l41lNib6/M2vY9vHyEhYvCAMTrY2FhY+Gmvj9JyKX07nHjgzlSsEB1N2OupFzbp2G0iUXN+m+1u0k4pFN7Dbb2dfM/G8jYXBVXzBFBy6XuANd9+s2SOWUqJ9CqqrcnKDa/wPUd+0ssHTzHONuhN/a8T5SBw7lPF1mApoG2uQwsP5iZ1DgXK9DBorYyojsNQDfItugH3jc9RE8bfgF1Cj6IPAeVatUK7H1aNuLe0w7gHv3M3PDuC0KCgIguPvN7THvqf0kOrzVhVTMKl+yhWzXHSxGnxjnDuZMPiGKU39sW9lhlOva+/wvNoxjHheTmyTyS5aaROx1NGUq6qwPRgGHyM5bxbCtw3GLjKa5sOzWqoN1R7BrDY7AjxFp0vE3md44VdCji4III7g7ypERfoi8w8zUlt9ns5YAhh7pBFxKROMOFWurKrBrMp9033zCZGkjUmei51RjlJPvLup+IIkinj1sVcAgi3l4zlc57cnoYoQ0pG/r8YRkV65pgNsUJJvbqJBxWLZEWpa6Ns41HhftCwDpiMMpU0c1NCPV2GbQWB8JScscScZ6b2anfVDsCb3t2M6Y5HdWcsoRpuiceZEEL9qFkvEcn0awDUWyFtR1XymX4xyzicPq6Fk/Gmo+PUS25LyRFQfou25nUdIn9qx2mODeEIsZO8vpfbj8NkOax2if2p/hmOF4rOe0N5fQ7cfhv2iM52EZN+pk7h2FDe2fd6eM9WSUVbPPjJydIGHwzHVtBJYCjYRxwTCWgTOOc3JnTFUuRABMfQR+lhplebcFjM4egWKW91d7zKTpGkIqUqujUIhkulTlHylVxBQ/aVKke6TuR4y7fEgbSNlVhKLjKhPE8QadJ3FrgdfHTTx1mHBvcEkX+F9N7jztbxl9zLXJRBr797X0Ngd++8oKYJ9qwtt1010P5TkzStnb00ajYVTQgtew1tpYDcabnb6ys4rxhaS6tmNjbuWGmnbz8I7xXE5F9m7EsBlzWGXKSwFyBm1Os5/iKpZiTffvfTp5xY4bclZcuvC8k9uLkm5UAdAuhHb6dZ0b0W1Eql1emrqSD7SqxzD8hbpOU0aOYzq/odwlS1VytqZIykggswFjbw218J0xSvg4ZTbTTNzzVxb7MiU6AVWcn3Qoyqo1Nuna855jsY1wWdnZgQzPdjYjz7Ai86Lzfwc16N1UF0IN/vFRclVPfY220nIccEUBHDMxUkLckG+2h0+J110mOVy2o6emUNLXn2IxWKN2ItplC5icpsdbA7j85DZmUqyMQ4cMXGhBFjdddhbp3j9YAg7ZgAxO4AOuUeA0ldXqgnLc3t8bDfyEUTSb+nXuTudVxQWhW9nEWOtrJUygElfwtv7PhJfGKJBnDfWFSGQlSpzAg2IN73HjOycrcbGPw12t66n7NQdz0cDs353m92jhlFRdox3OeCsUxAAsGCP5H3D+Y+IlTicLYX7i4m/wCN4DPh6qEalGA/mAuv1AmR4GhxNAKur07AjuLaGRpsXGepU8Bq5MShJUWuSSbXFpoXfLmsBlY3FtZScz8sVKaZwpKrYsRfS/aSeWMNiQpWulRUIDIXUgWOtwfKaRw8q/IpZfRt+RK5qetoEarldCfPK35idESiMoVrHSxvrMF6PsN+9qVdlIyJ/FYhnI7gWX5zod5pTSo55NOTaMTzLyFSrAvQtTqb2HuMfEdPOcl4rhKuHc06qFWHyI7qeonpGUvMPAKOKQpUXX7rj3kPcGQ4lxyNcM89mue0L17dpZcwcHq4SqaVQeKOPdde4/tKz1h7SXE3Ur9m04ZhalWqlPudT2UakyY3OdFKhovRdFQlLm1wBpcr2ln6PqJapWdtSqKB4Zib/wDrL7ifA8PXP72krnuR7XzGs7Oom3LVejmwaL/shrCFHQOhDKwuCJKTDx3BYBKSBEUKi7KOkk5JiNtXwRxTjVdwo1kupoCZm8XiC7WG0iTocY2PVMSWOkdoYYmO4HBS5o4e0hRb8lSlXgxPNtLKaYI0IbyvpM+HOjAjp5WI1y/Sa/0hqFp0n199k029tevbaYTiVdkSwsM4KhiRZTbTTudpz5I1OjvwSvGmZXjfES9ZiAMoOim1tAB7Vt9tpWuh0vudT+sQELHKN7y6xeDAIyNmGVdexKAkHxBJHwmr/VI5+ZSYOWuEVMTWShTAux9o/hQas3y7dSJ6O4Vw1KFNKaKFVQAAOwmM9F3KzUEOIqrZ3FkBOoQ2JJHQkgfATodppHxZz5GrpDWIqhEZjsqkn4C84VzQcru623IC6kAnbXuDf5Tp/PPEglL1QazPqdj7A0N79z57TnvGsOHQVtQjFUAN77XDDTLbOp1Osyy8uvh09NHVW/Zl6lQkXPXXz2vbwG0r6p3tb6bdjJ2IplTa/l9RrINSTEuZHcdu8uOVeNNhMQlUXyH2ai/iQ76dwdfhKcrDyG1/88pd0YuN8Hdq5zgMpupsykbEHUGYHlrD4jDcQrLRQOmZyykhQUzZgQT94XAmk9G2NWrhjRZgXpsQATc5DqvwGo+EyfNnEcRh8bVWm4WxUqct2F0U7zSDSlbMZLho6XjON4Z0uozhrhky3va91a+gNwflMTjuKkMUZ3FIWtTubhei5zraVfIfFHbFFazl/WAkFrWDqcwsOlxml56ReDZcldB7N8jAdm1UnyNx8ROmU/1uJlFJSpkejx9y6sgCKgyoiaBF8PHxnReX+K1KiA1Ab9DsT/MJy7llkzAMLnpOo8Kp6AzmjNvg1nFF6HJihG0lLxLmelSYooLsNCFsAD2J7+UptLyKGOU3UVY1zzwEYrDMAB6xAXQ9cw3XyO04D63wnpjAV2emrMpQnXKTcgdJ535qwgTGYhBsKr28ib/rDyVG4tpm/wDRpjCMQ6N99NP5kN7fIn5ToFVLGcn4VXZGV0IDKQwv3H6dJ1jC4pcRTWqnXQi9yp6qZ0Z407MIP0JWLVYhYWIxSU0Lu4RRuzaAX2mNmmt8Ij8VuENpncIApJcgAa3M0S4ujiEIp1EfTZWBI8xvMXxq+YodAB+Z3mc2krN8UG5avgs6/OdFNERnt1uFEVhPSFRJs9J0H4gQwH5GZccPBy5nCqSL6G9idbW8BNyvI+BdAVDEECzByb+OukzjKbNMsMUeHZXc3cXpVaaLTZXBOcgHsNLj4mYLitDPScA5ShJAuOgvZux6idFpej+kpzZnJGa1iAbHoSR+ka4zyeoT91Td2NySXBINha4JGniNdJM8UnLYvFmxxjqjhmFwtV2GUEC5udvM+OhnU+T+WFxDoxX9xTVVYte9RgL2HhffXaPcN5LxLsPWKEQHUlhe19coA1PnYTp+Cwi0kVEUKqiwA+p85UVKTtqkZ5Jxxqou2/6HkUAADQDYeEhcW4lTw9NqlQ2UdOpJ2UDqSZPM5X6RMSzYgKx9lV9hddz7zW6k2I8peSWsbOfFj3lRS8S441euKtW2XMPYH3UHQHqN795VcxcdFWplRCEprdFuFygXBYkan3tuoFo3iQQNrW6n46dusoTiVWrqLqxytfsfGc8JNs9CcVFKi4ANSzXBRFJZ+nu3BXx8PCUxdSLk7/5rJeEqM1OrQH3faUbDKdT8jK5lyjXUBh11B3uLa/8AUpLlkSfCY62lwd9CNe+ug+MI7a6flpv+cQtS7EgX32sCfE21ttpHETM1iug3uTYjfUxmdG59FFUCrUF90Dedmtp4C4+csObuAUnxD13dhnCBURb3YCzFm6CwEqeQq2V3AsWcC1trAm9h03H0nQV4cXHtSoyargwmuTB4fllQVqUS4dWDC5vqDedGxuHTE4Yo+gK3Pdb6H/a2X5R7C8OC6Wj2UIy390mx8mGVv0PwnRF2YMx/L3LJQlnGqkjwuDYzZ4VrG0LCDK7023vceItoflb5RNX2XglRTexbU40mApBswpoGOubKL/OKotpHpLBNrwJrOFUsdgCTPNPH8cKuJrVOjVGI8r2H5Tq3pS5sXD0TQpt+8qAjQ+6vUzhwqeMVlJG4wOKW215b8M5ofCPmUZ0PvptmHcHow6TK4LH6bn6f2kbHY0sfp/mk1eZ60zRwjZ6B4bjqGLpitQYMp3GxB6qw3Vh2h4igrKUdQykWKsLgjxBnAODcfq4V/WUCUbZhe6OOzr1H5TrnLPpEw2KASvahV2sx9hz/AAOfyNj5zJS+kOLi7iKPJeHzh6b1aTKbjIw08swJHzk3mDgnrlzJ74H+4diehl8+FO6m4jYJGhENYtND7+TZNu6OcYOqlJylZWtsdLMp8uotNBguEBvbwWJyNqSl7qb/AIkO3yl3xPhNKuPbFm6ONGH9x4GZXFctvTbNZmUbPSJDr4lf885jUsfDVr+zq3jl5un/AEy1fjmOw+mIw61VH36ZKm3e1iPylhgucsK49pjSbqtQFbH+bYygwuMx6j9zWTEKPuuMtQeatY//AKMi4/jqE2xeBsRoSLqdeuo1+crdfa/yR2b9fwzpFKsrAMrBgdipBB+IiyZx2t9jNzSerRPS+o+amN4fjuKoH93ic69mOYDwswv8o3kS/wBEvpX6f8nZC0xPPXL71Uz0lLOlzYWuQbC3cka2+MqsN6RK6gCth0fxVip87EMJZUPSRQOj0aid7ZWt9RFKUZqmKGLLCVpHNqpLDW+mhHbvKytSKtmXUdVta9xbvOtcQ4jwjFa1GyPb38rU3+JAs3xvMpjeGYFLsuKqOOiqtMuf6iwH0mWuvho6d9vKaZjhUJZAqZCQEZtDYWtfwFzf4ayNWw6DMzPe9rAC127dTbrtLzilOgwtQR0I++9RLn+lVFuvWU2JoiwIYE6XA2hfINcciqeUCyA30uSPxC/z1inptbKL6kKFAuTc2CgDqdoxhyy2t326Tonou4atSu2IaxFNcqLfVXbdyLfhuAfExxVszm9Y2XvJHJn2ZfW1DerUVbrbSmN8g7+J7ibVKNpLyCJNhN6RxN2M5ZD4ogKakDUWubaye5B2jGOAyG/QaG23lLj5QmRsbQDolS5VkGpGhI/7sZXVMfnt+Ib6Wv4iWGGRmXQk6bnr5xrH8NXQsTbqRuPETWl4ZCkT8I91BmT5156pYRCiEPVOgAO3nM7z5xrG4analrTOmcbgfxCcerYhnYszFmOpJmMk7o1jXklcR4hUr1Gq1GzMxv5eAkWJDRV5JRe0yNcpAHwv5xl8vUn52+loKVFtiCIhkN/01Mj15N6D9WPl3Kn9YSKvcfy2/wCYDRuOv+2wEcTD92I8MpP5GTYUX3A+c8VhLLSqF6Yt+6qXcf09V+BtOh8G9KOFqgLiFNFjoSTnp/7hqvxE46+HZTrcdNQR+cadL7nWUpEygn6PR+FpUaq5qFc2OoyuHHyN7eUsKeHYbnN42tf4TzFhjVpnPSd0P4kzC/ymm4d6ROIUNGqCoB0qJr8xYy1IzcGduxXD6bm7Jr+IaN8xrI7YFgMq1Lr+CqgqL+h/OYLAemNdBiMOR3KNmHyYCaLB+krhtTepkPZ1I+sP1Yv2QnifLpYezh6BPdHamSP5bW+syuK5ZxAJtQcDwIf8p0bDcbwVT3K9M+Tj+8nJkPuuPgwMiWKMjaHUzjxRxatw2sm9OoLd0YfpK/E5l3BvtqDoL3nfPVdmlRjuVaFVizgknf22H0vM3g+M2j1ab/ZV/g4uKlxt8bRov2BM7tgOCU6KlUAt2YlvzkwYcDonyEaw/wDopdUr4R56am7HSmxPgrH8hHaXA8U+iYaqf6HA+onoLJbqBEPUUbuB8RKWKK9mT6iT9HFMJyLj2/8ADk8XdV/W/wBJ0TkXll8Grmoys75dEJKqFv1I1Opl5X4rh09+so/qEqcXzvgKe9UMR2N5SjFcmcskpKqNTmbygCjqZzfH+lrDroiFz8pleJ+lnEPcU0CDvLszr6dxeoi6kgeZtKjF8fw7Xpo6u++UG+x6zzvxHmrFVr56rW7AybyHirYr2jqykC563vKgm5KxSpI9E4B7AeIBj2JqXFpQ4DiIyi520jtTHq2gOs315Miq43TRlZHW6toROGcxcO+z12Qe7ckTr3MHE1Q+0bWnJeZccK1Usu0nK1RcE0VAMVeEFh5ZzmnJo0TXb6GSHw5Gug8wRDp1E/Dm6+9JiZGt7BHxmaTfo6mVjX/EPp/wYzUc2sPiQSfhLLEYUC5C97afLrIDu22XT4xOLQWRQr/4wigvc9O4/SPJWbw28NosOtrMVHw1idjIrnt+R/WR2U9P7SeSmt2Hy/uIn93+L6j+0LFRBagx6MZHeiw3Fpak0rbn4H/iNu1Px+n9o0yXEqfVHoI6mLrJ7tR18nYfrJb5eg+kYqIb7fQStiHEkUuZMYnu4l/95MlJzrjx/wDIf46yoNPzherEq0S4svP284h/95+QiG55x5/87SkalGikfDE00W9Xm3GtvXf5yFV4ziG96q5/qMiFIVo6RLsU+Jdt3Y/ExsmKtAFjFTEQReWAJANRIjmHrMjBlNiDcGEKcPJFYam74bz4AoFRDfuOssn9JNNUK06RzHqdPrObZItQLR9xj0RN4rxiriGLu2/QSvyx1VH+GGUH/UhyvyWo0NWgjjJE5DBAXlKj4SZSW295YrRX7qnx1G8W6DbKL+czjmaOl4kyOgFtozWwoI0P5ywVLSUwB8NJv3U1yR2q8GRrYZlkUuw3/Ka+vhw2wkCvwa+366SWk+SWmjOqC2wv8Ih6bA6i0uqvCCmzSI+FbqbyG0OmVpQwrnxk77Ke31ihh/4TJbQKLK8X7kQFP4jLA0NbZfzh/ZR4fWFoerKz1Y7/AEhikvf6Sd9mHcRYwv8AL84WGpXtSHcRtqI7y0bBHoF+YiTgm/CPmIWKiqyDtCKDtaW4wrdh8xEPhzbb6xqRLgVhp+MIUj2kw0OtwPCPImmspyJUSt9WYYp+BlgxT/BE5bxbMeqIOSAC0l+p7kRRow2DUjAeMIt4D5R507QlpmFhQkHwhW8I8KJhikYWKmNKneLySQmHJivUmWqE0zVJQFgbmSEwWmlvjeCCciO5icoBtbaLVh2gglgLRx2klAbXvBBKiSxFbDgi5185Dq4AHawgglPwSiLX4aB2+sKjh7aafMwoJDAeOGOpuJXVRckQQSCkRXwuu8afD26wQSkyWhSuO2scOIIBAA1gggAhnGukbFQdoIIAKsDuITUgYIJRI02GAhLRXtBBGiWgygvoJK9UCIIIMAhhh4Rt8P5QQRgNARVIbw4ImBIQxfqb9fpDgghn/9k=",
                name:"vanilla",
                description:"Tasty and Yummy",
                price:"110",
                rating:4.5,


            },
            {
                image:"https://b.zmtcdn.com/data/pictures/chains/4/19661324/9afa14e3bfb56780332464e457019b5b.jpg",
                name:"chiken",
                description:"Spicy",
                price:"250",
                rating:5,

            },],
        },
        {
            name:"Combos",
            items:[{
                image:"https://b.zmtcdn.com/data/pictures/chains/4/19661324/9afa14e3bfb56780332464e457019b5b.jpg",
                name:"chiken",
                description:"Spicy",
                price:"250",
                rating:5,

            },
            {
                image:"https://b.zmtcdn.com/data/pictures/chains/4/19661324/9afa14e3bfb56780332464e457019b5b.jpg",
                name:"chiken",
                description:"Spicy",
                price:"250",
                rating:5,

            },],
        },
        {
            name:"Half and Half Combos",
            items:[{
                image:"https://b.zmtcdn.com/data/pictures/chains/4/19661324/9afa14e3bfb56780332464e457019b5b.jpg",
                name:"chiken",
                description:"Spicy",
                price:"250",
                rating:5,

            },
            {
                image:"https://b.zmtcdn.com/data/pictures/chains/4/19661324/9afa14e3bfb56780332464e457019b5b.jpg",
                name:"chiken",
                description:"Spicy",
                price:"250",
                rating:5,

            },
            {
                image:"https://b.zmtcdn.com/data/pictures/chains/4/19661324/9afa14e3bfb56780332464e457019b5b.jpg",
                name:"chiken",
                description:"Spicy",
                price:"250",
                rating:5,

            },],
        },
        {
            name:"Deserts",
            items:[{
                image:"https://b.zmtcdn.com/data/pictures/chains/4/19661324/9afa14e3bfb56780332464e457019b5b.jpg",
                name:"chiken",
                description:"Spicy",
                price:"250",
                rating:5,

            },],
        },
    ]);


    const [selected, setSelected] = useState("");

    const onClickHandler =(e) =>{
        if (e.target.id){
            setSelected(e.target.id);
        }
        return;
    };

    return (
        <>
            <div className="w-full h-screen flex">
               <aside className="hidden md:flex flex-col gap-3 border-r overflow-y-scroll border-gray-200 h-screen w-1/4">
               
                    {/* component */}
                    {menu.map((item) =>(
                        <MenuListContainer 
                            {...item} 
                            key={item._id} 
                            onClickHandler={onClickHandler} 
                            selected={selected} />

                    ))}
               </aside>
               <div className="w-full px-3 md:w-3/4">
                   <div className="pl-3 mb-4">
                       <h2 className="text-xl font-semibold ">Order Online </h2>
                       <h4 className="flex items-center gap-2 font-light text-gray-500 ">
                           <AiOutlineCompass /> Live Track your order | <BiTimeFive /> 45 Min
                       </h4>

                   </div>
                   <section className="flex h-screen overflow-y-scroll flex-col gap-3 md:gap-5">
                       {/* component Foodlist */}
                       {menu.map((item)=>(
                           <FoodList {...item} key={item._id} />
                       ))}
                   </section>

               </div>

            </div>

            {/* component floatMenuButton */}
            <FloatMenuBtn 
                menu={menu} 
                onClickHandler={onClickHandler} 
                selected={selected}/>
                
        </>
    )
}

export default OrderOnline
