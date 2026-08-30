@echo off
title MAY CHU PHAT SLIDE TOAN 6 LEN IPAD
color 0A
cls
echo ================================================================
echo           DANG PHAT SLIDE TOAN 6 CHO IPAD CUA PHUONG THAO
echo ================================================================
echo.
echo [1] Hay dam bao iPad va May tinh dang bat cung 1 mang Wi-Fi.
echo [2] Tren iPad, mo trinh duyet Safari va go vao dia chi sau:
echo.
echo        >>>   http://192.168.1.158:8000   <<<
echo.
echo ----------------------------------------------------------------
echo * Meo nho: Tren Safari iPad, bam vao nut Chia se -> chon 
echo   "Them vao MH chinh" (Add to Home Screen) de xem toan man hinh!
echo ----------------------------------------------------------------
echo.
echo [!] GIU CUA SO NAY MO TRONG LUC DAY HOC. 
echo     (Khi muon tat server, hay dong cua so nay lai).
echo ================================================================
echo.
python -m http.server 8000
pause
