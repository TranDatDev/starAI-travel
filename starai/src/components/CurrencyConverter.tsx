import { useTranslation } from 'react-i18next';

interface CurrencyConverterProps {
    amount: number;
}

const CurrencyConverter = (props: CurrencyConverterProps) => {
    const { t, i18n } = useTranslation();

    // Lấy tỷ giá và ký hiệu từ i18n
    const rate = parseFloat(t('currency.exchange-rate')); // Lấy tỷ giá
    const symbol = t('currency.symbol'); // Lấy ký hiệu tiền tệ

    // Quy đổi giá trị
    const convertedAmount = rate ? props.amount * rate : props.amount; // Nếu có tỷ giá thì đổi tiền, nếu không thì giữ nguyên

    // Định dạng số theo ngôn ngữ hiện tại
    const formattedAmount = new Intl.NumberFormat(i18n.language === 'vi' ? 'vi-VN' : 'en-US', {
        style: 'decimal',
        maximumFractionDigits: 2,
    }).format(convertedAmount);

    return (
        <div>
            <span>
                {formattedAmount} {symbol}
            </span>
        </div>
    );
};

export default CurrencyConverter;
